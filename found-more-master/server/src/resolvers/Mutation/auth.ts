import { addDays } from "date-fns"
import { AuthenticationError, NotFoundError, ServerError } from "../../modules/error-module"
import { getClientResetPasswordLink } from "../../modules/link-module"
import { sendEmail } from "../../modules/mail-module"
import { ResetPasswordEmail } from "../../modules/mail-module/emails/reset-password/type"
import { comparePassword, hashPassword } from "../../modules/password-module"
import { createToken, getUserId, validateTemporaryToken } from "../../modules/token-module"
import { getBrandName } from "../../modules/utils-module"
import { Context } from "../../typings"

export async function login(parent, { email, password }, ctx: Context, info) {

  const user = await ctx.db.query.user({ where: { email } }, "{ id deletedAt password brand { domain } role { name } }")
  const domain = getBrandName(ctx)

  if (!user) throw new NotFoundError("E0001", `No such user found for email: ${email}`)

  if (user.role.name !== "admin" && user.brand.domain !== domain) throw new AuthenticationError("E0010", `This email domain does not belong to ${domain}`)

  if (user.deletedAt) throw new AuthenticationError("E0011", "This account has been suspended.")

  if (!user.password) throw new AuthenticationError("E0002", "You cannot login via password")

  const valid = await comparePassword(password, user.password)

  if (!valid) throw new AuthenticationError("E0003", "Invalid password")

  return {
    token: createToken(user.id),
    user,
  }
}

export async function resetPassword(parent, { email }, ctx: Context, info) {

  const user = await ctx.db.query.user({ where: { email } }, "{ id email firstName lastName brand { domain name contactPerson { email phoneNumber } } }")

  if (!user) throw new NotFoundError("E0004", `No such user found for email: ${email}`)

  // Create login token
  const validUntil = addDays(new Date(), 1)
  const token = createToken(user.id, validUntil)

  try {
    sendEmail("reset-password", {
      user,
      link: getClientResetPasswordLink(user.brand.domain, token),
      validUntil,
    } as ResetPasswordEmail)
  } catch (e) {
    throw new ServerError("E0005", e)
  }

  return true
}

export async function loginWithToken(parent, { loginToken }, ctx: Context, info) {

  const { userId } = await validateTemporaryToken(loginToken)

  return {
    token: createToken(userId),
    user: { id: userId },
  }
}

export async function changePasswordWithToken(parent, { loginToken, password }, ctx: Context, info) {

  const jwtPayload = await validateTemporaryToken(loginToken)

  await ctx.db.mutation.updateUser({
    where: { id: jwtPayload.userId },
    data: { password: await hashPassword(password) },
  })

  return true
}

export async function changePassword(parent, { oldPassword, newPassword }, ctx: Context, info) {

  const userId = getUserId(ctx)
  const user = await ctx.db.query.user({ where: { id: userId } }, "{ id password }")

  if (!user.password) {
    throw new AuthenticationError("E0006", "You don't have a password, a password change is not possible")
  }

  const valid = await comparePassword(oldPassword, user.password)

  if (!valid) throw new AuthenticationError("E0007", "The old password is invalid")

  await ctx.db.mutation.updateUser({
    where: { id: user.id },
    data: { password: await hashPassword(newPassword) },
  })

  return true
}

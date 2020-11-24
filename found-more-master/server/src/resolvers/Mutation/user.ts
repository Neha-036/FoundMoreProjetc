import { UserCreateInput, UserUpdateInput, UserWhereUniqueInput } from "../../generated/prisma"
import { AuthorizationError, ValidationError } from "../../modules/error-module"
import { sendEmail } from "../../modules/mail-module"
import { WelcomeEmail } from "../../modules/mail-module/emails/welcome/type"
import { createRandomPassword, hashPassword } from "../../modules/password-module"
import { hasPermission, isMe } from "../../modules/user-module"
import { Context } from "../../typings"

export async function createUser(parent, args: { input: UserCreateInput }, ctx: Context, info) {
  try {
    const authorized = await hasPermission(ctx, "CREATE_ALL", "USER")

    if (!authorized) throw new AuthorizationError("E0401")

    const password = await createRandomPassword()

    args.input.password = await hashPassword(password)

    const user = await ctx.db.mutation.createUser({ data: args.input }, "{ id email firstName lastName brand { domain name contactPerson { email phoneNumber } } }")

    sendEmail("welcome", {
      user,
      password,
    } as WelcomeEmail)

    return await ctx.db.query.user({ where: { id: user.id } }, info)
  } catch (e) {
    checkForGraphqlError(e)
  }
}

export async function updateUser(parent, args: { input: UserUpdateInput; where: UserWhereUniqueInput }, ctx: Context, info) {
  try {
    const authorized =
      await hasPermission(ctx, "UPDATE_ALL", "USER") ||
      (
        await hasPermission(ctx, "UPDATE_OWN", "USER") &&
        await isMe(ctx, args.where)
      )

    if (!authorized) throw new AuthorizationError("E0402")

    return await ctx.db.mutation.updateUser({ data: args.input, where: args.where }, info)
  } catch (e) {
    checkForGraphqlError(e)
  }
}

function checkForGraphqlError(e) {
  if (["email", "unique"].every((el) => e.message.includes(el))) {
    throw new ValidationError("E0403", "This email address already exists")
  } else throw e
}

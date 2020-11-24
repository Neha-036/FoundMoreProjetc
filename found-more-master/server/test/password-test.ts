import test from "ava"
import { parse } from "url"
import { ResetPasswordEmail } from "../src/modules/mail-module/emails/reset-password/type"
import { createRandomPassword } from "../src/modules/password-module"
import { getEmailBox } from "../utils/fake-email-box"
import { createApi, createUser } from "../utils/utils"

test("resetPassword and changePasswordWithToken", async (t) => {

  const user = await createUser("Found", "admin")

  const emailBox = await getEmailBox(user.email)

  const newPassword = await createRandomPassword()

  const api = createApi()

  // Check that we cannot login
  const error = await t.throws(api.mutation.login(
    {
      email: user.email,
      password: newPassword,
    },
    "{ token }",
  ))

  t.regex(error.message, /E0003/)

  // Call reset password
  const result1 = await api.mutation.resetPassword(
    { email: user.email },
  )

  t.truthy(result1)

  // Get the login token from the emailbox
  const email = await emailBox.read<ResetPasswordEmail>()

  t.truthy(email.link, "Expected a reset password link")

  const url = parse(email.link, true)

  t.truthy(url.query.token, "Expected the reset password link to contain a login token")

  const token: string = url.query.token as string

  // Set the new password with the token
  const result2 = await api.mutation.changePasswordWithToken(
    {
      loginToken: token,
      password: newPassword,
    },
  )

  t.truthy(result2)

  // Check that we are able to login
  const result3 = await api.mutation.login(
    {
      email: user.email,
      password: newPassword,
    },
    "{ token }",
  )

  t.truthy(result3.token)
})

test("resetPassword with invalid email", async (t) => {

  const api = createApi()

  const error = await t.throws(api.mutation.resetPassword(
    { email: "thiswillneverbesomeonesemail@example.org" },
  ))

  t.regex(error.message, /E0004/)
})

test("changePasswordWithToken with invalid loginToken", async (t) => {

  const api = createApi()

  const error = await t.throws(api.mutation.changePasswordWithToken(
    {
      loginToken: "thiswillneverbearealjwt",
      password: "test",
    },
  ))

  t.regex(error.message, /E0104/)
})

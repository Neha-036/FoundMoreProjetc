import test from "ava"
import { addDays } from "date-fns"
import { createToken } from "../src/modules/token-module"
import { createApi, createUser } from "../utils/utils"

test(`login`, async (t) => {

  const user = await createUser("found", "admin")

  const api = createApi()

  const result = await api.mutation.login(
    {
      email: user.email,
      password: user.password,
    },
    "{ token }",
  )

  t.truthy(result.token)
})

test(`login with invalid password`, async (t) => {

  const user = await createUser("found", "admin")

  const api = createApi()

  const error = await t.throws(api.mutation.login(
    {
      email: user.email,
      password: "thiswillneverbesomeonespassword",
    },
    "{ token }",
  ))

  t.regex(error.message, /E0003/)
})

test(`login with invalid email`, async (t) => {

  const api = createApi()

  const error = await t.throws(api.mutation.login(
    {
      email: "thiswillneverbesomeonesemail@example.org",
      password: "thiswillneverbesomeonespassword",
    },
    "{ token }",
  ))

  t.regex(error.message, /E0001/)
})

test(`login with temporary token`, async (t) => {

  const user = await createUser("found", "admin")

  const api = createApi()

  const temporaryToken = createToken(user.id, addDays(new Date(), 1))

  const result = await api.mutation.loginWithToken(
    { loginToken: temporaryToken },
    "{ token }",
  )

  t.truthy(result.token)
})

test(`login with invalid token`, async (t) => {

  const api = createApi()

  const error = await t.throws(api.mutation.loginWithToken(
    { loginToken: "thiswillneverbearealjwt" },
    "{ token }",
  ))

  t.regex(error.message, /E0104/)
})

test(`login with permanent token (should not be allowed)`, async (t) => {

  const user = await createUser("found", "admin")

  const api = await createApi()

  const error = await t.throws(api.mutation.loginWithToken(
    { loginToken: user.token },
    "{ token }",
  ))

  t.regex(error.message, /E0103/)
})

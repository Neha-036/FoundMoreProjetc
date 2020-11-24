import * as faker from "faker"
import * as fs from "fs"
import { Prisma, User } from "../src/generated/prisma"
import { hashPassword } from "../src/modules/password-module"
import { createToken } from "../src/modules/token-module"
import { Context } from "../src/typings"
import { AddressCreateInput, StoreCreateWithoutBrandInput } from "./binding/generated"
import { MoreBinding } from "./binding/more-binding"

const database = createPrisma()

interface TestUser extends User {
  token: string
}

/**
 * Creates both and admin user in the database and
 * the api where the user is logged in (with token).
 */
export async function createFoundUserAndApi() {
  const user = await createUser("found", "admin")
  const api = await createApi(user.token)
  return { user, api }
}

export async function createCustomerUserAndApi(brandDomain?: string, roleName?: string) {
  const user = await createUser(brandDomain, roleName)
  const api = await createApi(user.token)
  return { user, api }
}

/**
 * If no parameter are given:
 *  a user without any privileges will be made, working for a random brand with 2 stores.
 * @param brandDomain if this brand exists in the database, the user will be connected,
 *    else a new brand will be made with given name.
 * @param roleName needs to be the name of a role in the database
 */
export async function createUser(brandDomain?: string, roleName?: string) {

  if (!roleName) roleName = "unprivileged-user"
  const role = await database.query.roles({ where: { name: roleName } }, "{ id name}")

  if (!brandDomain) brandDomain = faker.company.companyName()
  const brand = await database.query.brand({ where: { domain: brandDomain } }, "{ id stores { id } }") ||
    await createBrandAndStores(brandDomain)

  const firstName = faker.name.firstName()
  const lastName = faker.name.lastName()
  const password = "nooneknows"

  const user = await database.mutation.createUser({
    data: {
      email: faker.internet.exampleEmail(firstName + Math.floor(Math.random() * 100 + 1).toString(), lastName).toLowerCase(),
      firstName,
      lastName,
      brand: { connect: { id: brand.id } },
      role: { connect: { id: role[0].id } },
      password: await hashPassword(password),
      stores: { connect: brand.stores.map((s) => ({ id: s.id })) },
    },
  })

  user.password = password

  const result = user as TestUser
  result.token = createToken(user.id)

  return result
}

/**
 * Creates a brand. Optionally with a given brandName and the amount of stores.
 */
export async function createBrandAndStores(brandName?: string, stores?: number) {
  return await database.mutation.createBrand({
    data: {
      domain: brandName || faker.company.companyName(),
      name: brandName || faker.company.companyName(),
      primaryColor: "grey",
      secondaryColor: "ffffff",
      textColor: "black",
      stores: {
        create: createRandomStores(stores || 2),
      },
    },
  }, "{ id name stores { id address { id } } }")
}

/**
 * Creates random stores located in EU countries
 * @param int The amount of stores to be created
 */
export function createRandomStores(int: number) {

  const randomStores = [] as StoreCreateWithoutBrandInput[]

  for (let i = 0; i < int; i++) {
    randomStores.push({
      name: `store_${Math.floor(Math.random() * 100 + 1)}`,
      email: `${faker.name.firstName()}@example.org`,
      address: {
        create: createRandomAddress(),
      },
    })
  }

  return randomStores
}

export function createRandomAddress(country?: string, city?: string) {

  const countriesEU = [
    "NL",
    "NL",
    "BE",
    "FR",
    "IT",
    "SP",
    "EN",
    "DE",
    "GR",
    "HU",
  ]

  return {
    street: faker.address.streetName(),
    number: Math.floor(Math.random() * 100 + 1).toString(),
    postalCode: faker.address.zipCode(),
    city: city || faker.address.city(),
    countryCode: country ||
      countriesEU[Math.floor(Math.random() * countriesEU.length)],
  } as AddressCreateInput
}

export function createArticleNumber(size?: string, type?: string) {

  return `000${Math.floor(Math.random() * 10000)}_${type || faker.lorem.word()}_${size || faker.commerce.color()}`
}

/**
 * Creates a new context that can be used to test methods that require a context
 * @param userId The user id
 */
export function createContext(userId: string, db?: Prisma) {
  return {
    db: db || createPrisma(),
    userId,
  } as Context
}

/**
 * Creates a new Prisma client
 * @param token The optional JWT (token)
 */
export function createPrisma() {
  return new Prisma({
    endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma API (value set in `.env`)
    secret: process.env.PRISMA_SECRET, // only needed if specified in `database / prisma.yml` (value set in `.env`)
    debug: false, // log all GraphQL queries & mutations sent to the Prisma API
  })
}

/**
 * Creates an new API Binding
 * @param token The optional user token
 */
export function createApi(token?: string) {
  const binding = new MoreBinding(process.env.API_ENDPOINT, token)

  return binding
}

/**
 * Creates an new API Binding
 * @param token The optional user token
 */
export async function createApiAndLogin(email?: string, password?: string) {
  const binding = createApi()

  const { token } = await binding.mutation.login(
    {
      email: email || process.env.API_USER,
      password: password || process.env.API_PASSWORD,
    },
    "{ token }",
  )

  return createApi(token)
}

export async function readFile(file: string) {

  return new Promise<Buffer>((resolve, reject) => {

    fs.readFile(file, (err, contents) => {
      if (err) reject(err)
      else resolve(contents)
    })
  })
}

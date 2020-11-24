import { createPrisma } from "../utils/utils"

const db = createPrisma()

async function main() {
  if (process.argv.length !== 4) {
    console.log("please provide <user id> <brand-domain>")
    process.exit(0)
  }
  const [, , userId, brandDomain] = process.argv
  try {
    const { users } = await db.query.brand({ where: { domain: brandDomain } }, "{ users { id firstName } }")
    const [user] = users.filter((i) => i.id !== userId)
    if (!user) {
      console.log(`The given user does not belong to brand ${brandDomain}`)
      process.exit(0)
    }
    const stores = await db.query.stores({ where: { brand: { domain: brandDomain } } })
    await db.mutation.updateUser({ where: { id: userId }, data: { stores: { connect: stores.map((store) => ({ id: store.id } )) } } })
    console.log(`Succesfully added ${stores.length} stores to ${user.firstName}`)
    process.exit(0)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

main()

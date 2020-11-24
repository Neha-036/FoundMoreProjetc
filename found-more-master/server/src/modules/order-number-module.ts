import { StoreWhereUniqueInput } from "../generated/prisma"
import { Context } from "../typings"

export async function getNextOrderNumberByContext(ctx: Context, storeWhereUniqueInput: StoreWhereUniqueInput) {

  const store = await ctx.db.query.store({ where: storeWhereUniqueInput }, "{ id brand { domain } }")

  return getNextOrderNumber(store.brand.domain, store.id)
}

export function getNextOrderNumber(domain: string, storeId: string) {

  const yr = (new Date()).getFullYear().toString().slice(2) // 18
  const br = domain.slice(0, 2).toUpperCase() // RI
  const st = storeId.toString().slice(-3).toUpperCase() // XYZ
  const random = zeroPad(Math.floor(Math.random() * 4096).toString(16), 3).toUpperCase() // A01

  return `${yr}${br}-${st}-${random}`
}

function zeroPad(num, places) {
  const zero = places - num.toString().length + 1
  return Array(+(zero > 0 && zero)).join("0") + num
}

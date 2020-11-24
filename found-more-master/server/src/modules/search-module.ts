import { OrderStatus, OrderTemplateWhereInput, OrderWhereInput, StoreWhereInput } from "../generated/prisma"

export function storesSearchQuery(search: string) {

  return { AND: toWords(search).map(storesSearchQueryByWord) } as StoreWhereInput
}

export function orderTemplatesSearchQuery(search: string) {

  return { AND: toWords(search).map(orderTemplatesSearchQueryByWord) } as OrderTemplateWhereInput
}

export function ordersSearchQuery(search: string) {

  return { AND: toWords(search).map(ordersSearchQueryByWord) } as OrderWhereInput
}

function storesSearchQueryByWord(searchWord: string) {
  return {
    OR: [
      { name_contains: normalize(searchWord) },
      { type_contains: normalize(searchWord) },
      { address: { countryCode_contains: toCountryCode(searchWord) } },
      { address: { city_contains: normalize(searchWord) } },
    ],
  } as StoreWhereInput
}

function orderTemplatesSearchQueryByWord(searchWord: string) {

  const q = {
    OR: [
      { properties: { name_contains: normalize(searchWord) } },
      { properties: { articleNumber_contains: normalize(searchWord) } },
      { product: { properties: { name_contains: normalize(searchWord) } } },
      { product: { properties: { articleNumber_contains: normalize(searchWord) } } },
    ],
  } as OrderTemplateWhereInput

  return {
    OR: [
      q,
      { children_some: q },
      { children_some: { children_some: q } },
      // { children_some: { children_some: { children_some: q } } },
    ],
  } as OrderTemplateWhereInput
}

function ordersSearchQueryByWord(searchWord: string) {

  return {
    OR: [
      { orderNumber_contains: toOrderNummer(searchWord) },
      // { items_some: { orderTemplate: orderTemplatesSearchQueryByWord(searchWord) } },
      { store: storesSearchQuery(searchWord) },
      { status_in: toStatus(searchWord) },
    ],
  } as OrderWhereInput
}

function toWords(search: string) {
  // https://stackoverflow.com/questions/14912502/how-do-i-split-a-string-by-whitespace-and-ignoring-leading-and-trailing-whitespa
  return search.match(/\S+/g) || []
}

function toStatus(searchWord: string) {
  return ["PENDING", "RECEIVED", "DISPATCHED", "DELIVERED", "INSTALLED", "CANCELLED"].filter((s) => s.includes(searchWord.trim().toUpperCase())) as OrderStatus[]
}

function toCountryCode(searchWord: string) {
  return searchWord.toUpperCase()
}

function toOrderNummer(searchWord: string) {
  return searchWord.toUpperCase()
}

function normalize(searchWord: string) {
  return searchWord
}

import * as FormData from "form-data"
import { Brand, BrandCreateInput, BrandUpdateInput, BrandWhereUniqueInput, OrderTemplateCreateInput, OrderTemplateUpdateInput, OrderTemplateWhereUniqueInput, ProductCategoryCreateInput, ProductCategoryUpdateInput, ProductCategoryWhereUniqueInput, ProductCreateInput, ProductUpdateInput, ProductWhereUniqueInput, Store, StoreCreateInput, StoreUpdateInput, StoreWhereUniqueInput } from "./binding/generated"
import { MoreBinding } from "./binding/more-binding"

export async function applyBrandQuery(api: MoreBinding, input: BrandCreateInput, logo: any, logoName: string, backgroundImage: any, backgroundImageName: string) {

  const body = new FormData()

  body.append(
    "operations",
    JSON.stringify({
      variables: {
        input,
        logo: null,
        backgroundImage: null,
      },
      query: `mutation ($input:BrandCreateInput!, $logo:Upload, $backgroundImage:Upload){
        createBrand(input:$input, logo:$logo, backgroundImage:$backgroundImage){
          id
          domain
          logo { location }
          backgroundImage { location }
        }
      }`,
    }),
  )

  body.append("map", JSON.stringify({ 0: ["variables.logo"], 1: ["variables.backgroundImage"] }))
  body.append("0", logo, { filename: logoName } as any)
  body.append("1", backgroundImage, { filename: backgroundImageName } as any)

  const result = await fetch(api.uri, { method: "POST", body: body as any, headers: { Authorization: `Bearer ${api.token}` } })
  return (await result.json()).data.createBrand as Brand
}

export async function applyBrandImportQuery(api: MoreBinding, excel: any, excelName: string) {

  const body = new FormData()

  body.append(
    "operations",
    JSON.stringify({
      variables: {
        excel: null,
      },
      query: `mutation($excel:Upload){
        brandImport(excel:$excel)
      }`,
    }),
  )

  body.append("map", JSON.stringify({ 0: ["variables.excel"]}))
  body.append("0", excel, { filename: excelName } as any)

  const result = await fetch(api.uri, { method: "POST", body: body as any, headers: { Authorization: `Bearer ${api.token}` } })
  const data = await result.json()
  return data.data.brandImport as boolean
}

export async function applyStoresAndOrdersImportQuery(api: MoreBinding, domain: string, excel: any, excelName: string) {

  const body = new FormData()

  body.append(
    "operations",
    JSON.stringify({
      variables: {
        excel: null,
        domain,
      },
      query: `mutation($domain: String!, $excel:Upload){
        partialImport(domain: $domain, excel:$excel)
      }`,
    }),
  )

  body.append("map", JSON.stringify({ 0: ["variables.excel"]}))
  body.append("0", excel, { filename: excelName } as any)

  const result = await fetch(api.uri, { method: "POST", body: body as any, headers: { Authorization: `Bearer ${api.token}` } })
  const data = await result.json()
  return data.data.partialImport as boolean
}

export async function applyUpdateBrandQuery(api: MoreBinding, input: BrandUpdateInput, where: BrandWhereUniqueInput, logo: any, logoName: string, backgroundImage: any, backgroundImageName: string) {

  const body = new FormData()

  body.append(
    "operations",
    JSON.stringify({
      variables: {
        input,
        where,
        logo: null,
        backgroundImage: null,
      },
      query: `mutation ($input:BrandUpdateInput!, $where:BrandWhereUniqueInput!, $logo:Upload, $backgroundImage:Upload){
        updateBrand(input:$input, where:$where, logo:$logo, backgroundImage:$backgroundImage){
          id
          logo { location }
          backgroundImage { location }
        }
      }`,
    }),
  )

  body.append("map", JSON.stringify({ 0: ["variables.logo"], 1: ["variables.backgroundImage"] }))
  body.append("0", logo, { filename: logoName } as any)
  body.append("1", backgroundImage, { filename: backgroundImageName } as any)

  const result = await fetch(api.uri, { method: "POST", body: body as any, headers: { Authorization: `Bearer ${api.token}` } })
  return (await result.json()).data.updateBrand as Brand
}

export async function applyStoreQuery(api: MoreBinding, input: StoreCreateInput, imageData: any, imageName: string, fileData: any[], fileNames: string[]) {

  const body = new FormData()
  const files = new Array(fileData.length).fill(null)

  body.append(
    "operations",
    JSON.stringify({
      variables: {
        input,
        image: null,
        files,
      },
      query: `mutation ($input:StoreCreateInput!, $image:Upload, $files:[Upload!]!){
        createStore(input:$input, image:$image, files:$files){
          id
          image { location }
          files { location }
        }
      }`,
    }),
  )

  const mapBody = {}

  for (let i = 0; i < fileNames.length; i++) {
    mapBody[i] = [`variables.files.${i}`]
  }

  mapBody[fileNames.length] = ["variables.image"]

  body.append("map", JSON.stringify(mapBody))

  body.append(fileNames.length.toString(), imageData, { filename: imageName } as any)

  for (let i = 0; i < fileNames.length; i++) {
    body.append(i.toString(), fileData[i], { filename: fileNames[i] } as any)
  }

  const result = await fetch(api.uri, { method: "POST", body: body as any, headers: { Authorization: `Bearer ${api.token}` } })
  return (await result.json()).data.createStore as Store
}

export async function applyUpdateStoreQuery(api: MoreBinding, input: StoreUpdateInput, where: StoreWhereUniqueInput, imageData: any, imageName: string, fileData: any[], fileNames: string[]) {

  const body = new FormData()
  const files = new Array(fileData.length).fill(null)

  body.append(
    "operations",
    JSON.stringify({
      variables: {
        input,
        where,
        image: null,
        files,
      },
      query: `mutation ($input:StoreUpdateInput!, $where:StoreWhereUniqueInput!, $image:Upload, $files:[Upload!]!){
        updateStore(input:$input, where:$where, image:$image, files:$files){
          id
          image { location }
          files { location }
        }
      }`,
    }),
  )

  const mapBody = {}

  for (let i = 0; i < fileNames.length; i++) {
    mapBody[i] = [`variables.files.${i}`]
  }

  mapBody[fileNames.length] = ["variables.image"]

  body.append("map", JSON.stringify(mapBody))

  body.append(fileNames.length.toString(), imageData, { filename: imageName } as any)

  for (let i = 0; i < fileNames.length; i++) {
    body.append(i.toString(), fileData[i], { filename: fileNames[i] } as any)
  }

  const result = await fetch(api.uri, { method: "POST", body: body as any, headers: { Authorization: `Bearer ${api.token}` } })
  return (await result.json()).data.updateStore as Store
}

export async function applyPropertiesQuery(api: MoreBinding, input: OrderTemplateCreateInput | ProductCategoryCreateInput | ProductCreateInput, model: string, fileData: any[], fileNames: string[]) {

  const body = new FormData()
  const images = new Array(fileData.length).fill(null)

  body.append(
    "operations",
    JSON.stringify({
      variables: {
        input,
        images,
      },
      query: `mutation ($input:${model}CreateInput!, $images:[Upload!]!){
        create${model}(input:$input, images:$images){
          id
          properties { images { location } }
        }
      }`,
    }),
  )

  const mapBody = {}

  for (let i = 0; i < fileNames.length; i++) {
    mapBody[i] = [`variables.images.${i}`]
  }

  body.append("map", JSON.stringify(mapBody))

  for (let i = 0; i < fileNames.length; i++) {
    body.append(i.toString(), fileData[i], { filename: fileNames[i] } as any)
  }

  const result = await fetch(api.uri, { method: "POST", body: body as any, headers: { Authorization: `Bearer ${api.token}` } })
  return (await result.json())
  // return await fetch(api.uri, { method: "POST", body: body as any, headers: { Authorization: `Bearer ${api.token}` } })
}

export async function applyUpdatePropertiesQuery(api: MoreBinding, input: OrderTemplateUpdateInput | ProductCategoryUpdateInput | ProductUpdateInput, where: ProductWhereUniqueInput | OrderTemplateWhereUniqueInput | ProductCategoryWhereUniqueInput, model: string, fileData: any[], fileNames: string[]) {

  const body = new FormData()
  const images = new Array(fileData.length).fill(null)

  body.append(
    "operations",
    JSON.stringify({
      variables: {
        input,
        where,
        images,
      },
      query: `mutation ($input:${model}UpdateInput!, $where:${model}WhereUniqueInput!, $images:[Upload!]!){
        update${model}(input:$input, where:$where, images:$images){
          id
          properties { images { location } }
        }
      }`,
    }),
  )

  const mapBody = {}

  for (let i = 0; i < fileNames.length; i++) {
    mapBody[i] = [`variables.images.${i}`]
  }

  body.append("map", JSON.stringify(mapBody))

  for (let i = 0; i < fileNames.length; i++) {
    body.append(i.toString(), fileData[i], { filename: fileNames[i] } as any)
  }

  const result = await fetch(api.uri, { method: "POST", body: body as any, headers: { Authorization: `Bearer ${api.token}` } })
  return (await result.json())
}

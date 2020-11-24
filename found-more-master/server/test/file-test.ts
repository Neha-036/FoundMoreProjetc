import test from "ava"
import * as faker from "faker"
import * as path from "path"
import { BrandCreateInput, BrandUpdateInput, OrderTemplateCreateInput, OrderTemplateUpdateInput, ProductCategoryCreateInput, ProductCategoryUpdateInput, ProductCreateInput, ProductUpdateInput, StoreCreateInput, StoreUpdateInput } from "../utils/binding/generated"
import { applyBrandQuery, applyPropertiesQuery, applyStoreQuery, applyUpdateBrandQuery, applyUpdatePropertiesQuery, applyUpdateStoreQuery } from "../utils/file-utils"
import { createArticleNumber, createBrandAndStores, createFoundUserAndApi, readFile } from "../utils/utils"

test("create Brand with logo and background", async (t) => {

  const { api } = await createFoundUserAndApi()
  const testCompanyDomain = faker.company.companyName()

  const logo = await openFile("nike-logo.png")
  const backgroundImage = await openFile("nike-background.png")

  const query = {
    domain: testCompanyDomain,
    name: testCompanyDomain,
    primaryColor: "purple",
    secondaryColor: "ffffff",
    textColor: "grey",
  } as BrandCreateInput

  const result = await applyBrandQuery(api, query, logo, "nike-logo.png", backgroundImage, "nike-background.png")

  t.truthy(result.logo.location)
  t.truthy(result.backgroundImage.location)

})

test("update Brand with logo and background", async (t) => {

  const { api } = await createFoundUserAndApi()
  const brand = await createBrandAndStores()

  const logo = await openFile("nike-logo.png")
  const backgroundImage = await openFile("nike-background.png")

  const query = {} as BrandUpdateInput

  const result = await applyUpdateBrandQuery(api, query, { id: brand.id }, logo, "nike-logo.png", backgroundImage, "nike-background.png")

  t.truthy(result.logo.location)
  t.truthy(result.backgroundImage.location)
})

test("create Store with image and files", async (t) => {

  const { api } = await createFoundUserAndApi()

  const image = await openFile("nike-logo.png")
  const files = ["a", "b", "c"]

  const query = { name: faker.company.companyName() } as StoreCreateInput

  const result = await applyStoreQuery(api, query, image, "nike-logo.png", files, ["a.txt", "b.txt", "c.txt"])
  // const result = await applyStoreQuery(api, query, image, "nike-logo.png", [], [])

  t.truthy(result.image.location)
  t.truthy(result.files[0].location)
})

test("update Store with image and files", async (t) => {

  const { api } = await createFoundUserAndApi()

  const image = await openFile("nike-logo.png")
  const files = ["a", "b", "c"]

  const { id } = await api.mutation.createStore(
    {
      input: {
        phone: faker.phone.phoneNumber(),
        name: faker.company.companyName(),
      },
    },
    "{ id }",
  )
  const query = { name: faker.company.companyName() } as StoreUpdateInput

  const result = await applyUpdateStoreQuery(api, query, { id }, image, "nike-logo.png", files, ["a.txt", "b.txt", "c.txt"])

  t.truthy(result.image.location)
  t.truthy(result.files[0].location)
})

test("create Product with images in properties", async (t) => {

  const { api } = await createFoundUserAndApi()

  const image = await openFile("nike-logo.png")
  const files = [image, "d", "e"]

  const query = { properties: { create: { name: faker.commerce.productName() } } } as ProductCreateInput

  const result = await applyPropertiesQuery(api, query, "Product", files, ["nike-logo.png", "d.txt", "e.txt"])

  t.truthy(result.data.createProduct.properties.images[0].location)
})

test("update Product with images in properties", async (t) => {

  const { api } = await createFoundUserAndApi()

  const image = await openFile("nike-logo.png")
  const files = [image, "d", "e"]

  const { id } = await api.mutation.createProduct(
    {
      input: {
        properties: {
          create: {
            articleNumber: createArticleNumber(),
          },
        },
      },
    },
    "{ id }",
  )

  const query = { stock: 4, properties: { update: { description: "testttt" } } } as ProductUpdateInput //

  const result = await applyUpdatePropertiesQuery(api, query, { id }, "Product", files, ["products-detail.png", "d.txt", "e.txt"])

  t.truthy(result.data.updateProduct.properties.images[0].location)

  // Checken of connect wel een additive is en niet een overwrite
  const files2 = ["f"]
  const query2 = { stock: 3 } as ProductUpdateInput //
  const result2 = await applyUpdatePropertiesQuery(api, query2, { id }, "Product", files2, ["f.txt"])

  t.truthy(result2.data.updateProduct.properties.images[0].location)
})

test("create ProductCategory with images in properties", async (t) => {

  const { api } = await createFoundUserAndApi()

  const image = await openFile("nike-background.png")
  const files = [image, "f", "g"]

  const query = { properties: { create: { name: faker.commerce.productName() } } } as ProductCategoryCreateInput

  const result = await applyPropertiesQuery(api, query, "ProductCategory", files, ["nike-background.png", "f.txt", "g.txt"])

  t.truthy(result.data.createProductCategory.properties.images[0].location)
})

test("update ProductCategory with images in properties", async (t) => {

  const { api } = await createFoundUserAndApi()

  const image = await openFile("nike-logo.png")
  const files = [image, "d", "e"]

  const brand = await createBrandAndStores()

  const { id } = await api.mutation.createProductCategory({
    input: {
      brand: {
        connect: {
          id: brand.id,
        },
      },
      properties: {
        create: {
          articleNumber: createArticleNumber(),
          name: faker.commerce.productName(),
        },
      },
    },
  },
    "{ id }")

  const query = {} as ProductCategoryUpdateInput

  const result = await applyUpdatePropertiesQuery(api, query, { id }, "ProductCategory", files, ["products-detail.png", "d.txt", "e.txt"])

  t.truthy(result.data.updateProductCategory.properties.images[0].location)
})

test("create OrderTemplate with images in properties", async (t) => {

  const { api } = await createFoundUserAndApi()
  const brand = await createBrandAndStores()
  const image = await openFile("nike-background.png")
  const files = [image, "f", "g"]

  const query = { brand: { connect: { id: brand.id } }, properties: { create: { name: faker.commerce.productName() } } } as OrderTemplateCreateInput

  const result = await applyPropertiesQuery(api, query, "OrderTemplate", files, ["nike-background.png", "f.txt", "g.txt"])

  t.truthy(result.data.createOrderTemplate.properties.images[0].location)
})

test("update OrderTemplate with images in properties", async (t) => {

  const { api } = await createFoundUserAndApi()

  const image = await openFile("nike-logo.png")
  const files = [image, "d", "e"]

  const brand = await createBrandAndStores()

  const { id } = await api.mutation.createOrderTemplate({
    input: {
      brand: {
        connect: {
          id: brand.id,
        },
      },
      properties: {
        create: {
          articleNumber: createArticleNumber(),
          name: faker.commerce.productName(),
        },
      },
    },
  },
    "{ id }")

  const query = { orderable: false } as OrderTemplateUpdateInput

  const result = await applyUpdatePropertiesQuery(api, query, { id }, "OrderTemplate", files, ["products-detail.png", "d.txt", "e.txt"])

  t.truthy(result.data.updateOrderTemplate.properties.images[0].location)
})

async function openFile(fileName: string) {
  return await readFile(path.join(__dirname, "..", "data", "nike", fileName))
}

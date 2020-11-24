import * as fs from "fs"
import * as path from "path"
import { BrandCreateInput } from "../utils/binding/generated"
import { MoreBinding } from "../utils/binding/more-binding"
import { applyBrandQuery} from "../utils/file-utils"
import { createArticleNumber, createFoundUserAndApi, createRandomStores, createUser, readFile } from "../utils/utils"
async function main() {

  const { api } = await createFoundUserAndApi()

  const nike = await createNike(api)
  await createProjectNike(api, nike.id)
  const nikeUser = await createUser("nike", "store-owner")
  console.log("Created nike domain from wire frames and short list of excel (excl product images)")
  console.log(`You can now login to the nike domain with the random created user:\n  email    = ${nikeUser.email}\n  password = ${nikeUser.password}\n\n`)
}

async function createNike(api: MoreBinding) {

  const logo = await openFile("nike-logo.png")
  const backgroundImage = await openFile("nike-background.png")

  const brandCreateInput = {
    domain: "nike",
    name: "Nike",
    primaryColor: "#DD4C36",
    secondaryColor: "#ffffff",
    textColor: "#000000",
    stores: {
      create: createRandomStores(15),
    },
  } as BrandCreateInput

  return await applyBrandQuery(api, brandCreateInput, logo, "nike-logo.png", backgroundImage, "nike-background.png")
}
interface NikeImport {
  chapter1: string
  chapter2: string
  chapter3: string
  chapter4: string
  signage: string
  product: string
  size: string
  material: string
  language: string
  xl: string
  null: string
  price: string
  xlstore: string
}

async function createProjectNike(api: MoreBinding, brandId: string) {

  const inputPath = path.join(__dirname, "..", "data", "nike" , "short.json")
  const content = fs.readFileSync(inputPath, "utf8")
  const json = JSON.parse(content) as NikeImport[]

  // Initialize tree with the first object
  const project = await api.mutation.createOrderTemplate(
    {
      input: {
        brand: { connect: { id: brandId } },
        properties: {
          create: {
            name: "Milano Scalo",
            articleNumber: "Milano3.0",
          },
        },
      },
    }, "{ id }",
  )

  let currChapter1Id = await createSubOrderTemplate(
    api,
    brandId,
    json[0].chapter1,
    project.id,
  )
  let currChapter2Id = await createSubOrderTemplate(
    api,
    brandId,
    json[0].chapter2,
    currChapter1Id,
  )
  let currChapter3Id = await createSubOrderTemplate(
    api,
    brandId,
    json[0].chapter3,
    currChapter2Id,
  )

  await api.mutation.createOrderTemplate(
    {
      input: {
        brand: { connect: { id: brandId } },
        properties: {
          create: {
            name: json[0].signage,
            articleNumber: createArticleNumber("nike", "3.0"),
          },
        },
        parent: { connect: { id: currChapter3Id } },
        product: {
          create:
          {
            properties: {
              create: {
                articleNumber: "efda",
                description: json[0].product,
                material: json[0].material,
              },
            },
          },
        },
      },
    }, "{ id }",
  )

  // Fill rest of the tree
  for (let i = 1; i < json.length; i++) {
    if (json[i].chapter1 !== json[i - 1].chapter1) {
      currChapter1Id = await createSubOrderTemplate(api, brandId, json[i].chapter1, project.id)
    }
    if (json[i].chapter1 !== json[i - 1].chapter2) {
      currChapter2Id = await createSubOrderTemplate(api, brandId, json[i].chapter2, currChapter1Id)
    }
    if (json[i].chapter1 !== json[i - 1].chapter3) {
      currChapter3Id = await createSubOrderTemplate(api, brandId, json[i].chapter3, currChapter2Id)
    }

    await api.mutation.createOrderTemplate(
      {
        input: {
          brand: { connect: { id: brandId } },
          parent: { connect: { id: currChapter3Id } },
          defaultOrderAmount: Number(json[i].xl),
          properties: {
            create: {
              name: json[i].signage,
              articleNumber: createArticleNumber("nike", "3.0"),
            },
          },
          product: {
            create:
            {
              properties: {
                create: {
                  articleNumber: createArticleNumber(
                    json[i].size,
                    json[i].product,
                  ),
                  description: json[i].product,
                  material: json[i].material,
                },
              },
            },
          },
        },
      }, "{ id }",
    )
  }
}

async function createSubOrderTemplate(api: MoreBinding, brandId: string, subName: string, parentId: string) {

  const sub = await api.mutation.createOrderTemplate(
    {
      input: {
        brand: { connect: { id: brandId } },
        properties: {
          create: {
            name: subName,
            articleNumber: createArticleNumber("nike", "3.0"),
          },
        },
        parent: { connect: { id: parentId } },
      },
    }, "{ id }",
  )
  return sub.id
}

async function openFile(fileName: string) {
  return await readFile(path.join(__dirname, "..", "data", "nike", fileName))
}

main()

import test from "ava"
import * as path from "path"
import { NotificationEmail } from "../src/modules/mail-module/emails/notification/type"
import { getEmailBox } from "../utils/fake-email-box"
import { applyBrandImportQuery, applyStoresAndOrdersImportQuery } from "../utils/file-utils"
import { createFoundUserAndApi, createPrisma, readFile } from "../utils/utils"

const db = createPrisma()

// TODO: shorten import time
test.serial("import Brand", async (t) => {

  const { api, user } = await createFoundUserAndApi()

  const zip = await openFile("ring.zip")

  const emailBox = await getEmailBox(user.email)

  const result = await applyBrandImportQuery(api, zip, "ring.zip")

  t.true(result)

  const email = await emailBox.read<NotificationEmail>()
  const notification = await db.query.notification({ where: { id: email.notification.id } }, "{ title }")
  t.regex(notification.title, /Import finished/)
})

test.serial("import Stores and Orders", async (t) => {

  const { api } = await createFoundUserAndApi()

  const zip = await openFile("ring.zip")

  const result = await applyStoresAndOrdersImportQuery(api, "ring", zip, "ring.zip")

  // TODO: Wait for result like the test above
  t.true(result)
})

async function openFile(fileName: string) {
  return await readFile(path.join(__dirname, "..", "data", "test", fileName))
}

import * as faker from "faker"
import { User } from "../src/generated/prisma"
import { sendEmail } from "../src/modules/mail-module"
import { NotificationEmail } from "../src/modules/mail-module/emails/notification/type"
import { ResetPasswordEmail } from "../src/modules/mail-module/emails/reset-password/type"
import { WelcomeEmail } from "../src/modules/mail-module/emails/welcome/type"

const map = {
  "welcome": welcomeMail,
  "reset-password": resetPasswordMail,
  "notification": notificationMail,
}

const user = {
  firstName: "Firstname",
  lastName: "Lastname",
  email: "patrick@madx.nl",
  brand: {
    domain: "test",
    name: "Test",
    contactPerson: {
      email: "test@madx.nl",
      phoneNumber: "+31612345678",
    },
  },
} as User

async function main() {

  try {

    const template = process.argv[2] || "welcome"
    if (template === "all") {
      for (const t in map) {
        await sendEmail(t, await map[t]())
      }
    } else {

      if (!map[template]) throw new Error(`Uknown template: ${template}`)

      await sendEmail(template, await map[template]())
    }

    process.exit(0)

  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

async function welcomeMail() {
  return {
    user,
    password: "nooneknows",
  } as WelcomeEmail
}

async function resetPasswordMail() {
  return {
    user,
    link: faker.internet.url(),
    validUntil: new Date(),
  } as ResetPasswordEmail
}

async function notificationMail() {
  return {
    user,
    notification: { title: "This is notification title" , content: "This is the very very very very long notification content.", link: "https://madx.nl"},
  } as NotificationEmail
}

main()

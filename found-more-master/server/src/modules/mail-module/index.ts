
import { ServerError } from "../error-module"
import * as ipcMailer from "./mailers/ipc-mailer"
import * as mailgunMailer from "./mailers/mailgun-mailer"
import * as testMailer from "./mailers/test-mailer"
import { DefaultMail } from "./typings"

export async function sendEmail<T extends DefaultMail>(template: string, locals: T) {

  if (!locals.user || !locals.user.email || !locals.user.brand || !locals.user.brand.domain || !locals.user.brand.name) {
    throw new ServerError("E1301", "Expected some default email values. Did you forget to set this?")
  }

  locals.user.firstName = locals.user.firstName || "Client"

  // We assume that if we do not find mailgun domain, that we are testing email templates.
  if (process.env.MAILGUN_DOMAIN) {
    await mailgunMailer._sendEmail(template, locals)
  } else {
    await testMailer._sendEmail(template, locals)
  }

  // Always send emails via IPC (used for tests)
  // TODO: Check if the Jenkins actually sets some kind of ENV so we don't use IPC in production
  await ipcMailer._sendEmail(template, locals)
}

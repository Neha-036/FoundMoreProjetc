import * as Email from "email-templates"
import * as nodemailer from "nodemailer"
import * as mg from "nodemailer-mailgun-transport"
import * as path from "path"
import * as globalLocals from "../locals"
import { DefaultMail } from "../typings"

let transport = null

// The default (production) mailer

export async function _sendEmail<T extends DefaultMail>(template: string, locals: T) {

  console.log("Sending email via Mailgun: " + template, locals)

  if (!transport) {
    transport = nodemailer.createTransport(mg({
      auth: {
        api_key: process.env.MAILGUN_KEY,
        domain: process.env.MAILGUN_DOMAIN,
      },
    }))
  }

  try {

    const email = new Email({
      juice: true,
      juiceResources: {
        preserveImportant: true,
        webResources: {
          relativeTo: path.join(__dirname, "..", "assets"),
        },
      },
      message: {
        from: process.env.MAILGUN_DEFAULT_FROM,
      },
      transport,
      // uncomment below to send emails in development/test env:
      send: true,
      views: {
        root: path.join(__dirname, "..", "emails"),
        locals: {
          ...globalLocals,
        },
      },
    })

    await email.send({
      message: { to: locals.user.email },
      template,
      locals,
    })

  } catch (e) {
    console.error("Mailgun error: ", e)
  }
}

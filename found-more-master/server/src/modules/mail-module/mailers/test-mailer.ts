import * as Email from "email-templates"
import * as nodemailer from "nodemailer"
import * as path from "path"
import * as globalLocals from "../locals"
import { DefaultMail } from "../typings"

// A mailer that is used to design templates (it shows the email in the browser in the development environment).
// Unfortunately, we were unable to load the browser in the docker, so this mailer only has a function outside the docker.

let transport = null

export async function _sendEmail<T extends DefaultMail>(template: string, locals: T) {

  console.log("Sending email via testmailer: " + template, locals)

  if (!transport) {
    transport = nodemailer.createTransport({
      streamTransport: true,
    })
  }

  const email = new Email({
    juice: true,
    juiceResources: {
      preserveImportant: true,
      webResources: {
        relativeTo: path.join(__dirname, "..", "assets"),
      },
    },
    message: {
      from: "Found More <foundmore@example.org>",
    },
    transport,
    // uncomment below to send emails in development/test env:
    // send: true,
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
}

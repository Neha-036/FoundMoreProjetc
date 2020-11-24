import * as ipc from "node-ipc"
import { DefaultMail } from "../typings"

// A mailer that uses IPC to communicate with the test process.

export async function _sendEmail<T extends DefaultMail>(template: string, locals: T) {
  (ipc.server as any).broadcast("mail", locals)
}

// Start asap
ipc.config.id = "more-email-ipc"
ipc.config.silent = true
ipc.serve()
ipc.server.start()

import * as ipc from "node-ipc"

/**
 * TODO: Maybe use an actual email address to create a emailbox.
 * So multiple tests can use multiple (seperate) emailboxes.
 * We could also catch email for these emailboxes beforehand.
 * So we don't have to create a emailbox first.
 */

ipc.config.silent = true

export class EmailBox {

  public data: any

  constructor(public email: string) { }

  public async read<T>() {

    return new Promise<T>((resolve, reject) => {
      const check = () => {
        if (this.data) resolve(this.data)
        else setTimeout(check, 100)
      }
      setTimeout(check, 100)
    })
  }
}

export async function getEmailBox(email: string) {

  return new Promise<EmailBox>((resolve, reject) => {

    ipc.connectTo("more-email-ipc", () => {

      const emailBox = new EmailBox(email)

      ipc.of["more-email-ipc"].on("mail", (data) => {
        if (data.user.email === email) {
          emailBox.data = data
        }
      })

      resolve(emailBox)
    })
  })
}

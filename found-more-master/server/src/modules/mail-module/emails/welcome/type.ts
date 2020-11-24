import { DefaultMail } from "../../typings"

export interface WelcomeEmail extends DefaultMail {
  password: string
}

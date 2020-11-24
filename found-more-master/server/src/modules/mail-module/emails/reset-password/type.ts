import { DefaultMail } from "../../typings"

export interface ResetPasswordEmail extends DefaultMail {
  validUntil: Date,
}

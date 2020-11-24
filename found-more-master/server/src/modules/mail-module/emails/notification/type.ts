import { Notification } from "../../../../generated/prisma"
import { DefaultMail } from "../../typings"

export interface NotificationEmail extends DefaultMail {
  notification: Notification
}

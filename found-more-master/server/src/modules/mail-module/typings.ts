import { User } from "../../generated/prisma"

export interface DefaultMail {
  user: User
  link?: string
}

import * as bcrypt from "bcryptjs"
import * as crypto from "crypto"

export async function createRandomToken() {
  return crypto.randomBytes(48).toString("hex")
}

export async function createRandomPassword() {
  return crypto.randomBytes(4).toString("hex")
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10)
}

export async function comparePassword(password: string, hashedPassword: string) {
  return bcrypt.compare(password, hashedPassword)
}

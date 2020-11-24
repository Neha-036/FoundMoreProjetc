import { format, isBefore } from "date-fns"
import * as jwt from "jsonwebtoken"
import { Context } from "../typings"
import { AuthenticationError, ValidationError } from "./error-module"

export interface JWTPayload {
  userId: string
  validUntil?: string
}

export function getUserId(ctx: Context) {

  if (!ctx.userId) ctx.userId = getJWTPayload(ctx).userId

  return ctx.userId
}

export function createToken(userId: string, validUntil?: Date) {

  const payload: JWTPayload = { userId }

  if (validUntil) {
    payload.validUntil = format(validUntil)
  }

  return jwt.sign(payload, process.env.APP_SECRET) as string
}

export function validateToken(token: string) {

  const payload = verify(token)

  if (payload.validUntil && isBefore(payload.validUntil, new Date())) {
    throw new ValidationError("E0102", "This link is not valid anymore.")
  }

  return payload
}

export function validateTemporaryToken(token: string) {

  const payload = validateToken(token)

  // We only need to check if the token is a temporary token
  if (!payload.validUntil) throw new AuthenticationError("E0103", "Invalid token")

  return payload
}

function verify(token: string) {
  try {
    return jwt.verify(token, process.env.APP_SECRET) as JWTPayload
  } catch (e) {
    throw new ValidationError("E0104", "JWT malformed")
  }
}

function getJWTPayload(ctx: Context) {

  const Authorization = ctx.req.get("Authorization")

  if (Authorization) {
    const token = Authorization.replace("Bearer ", "")
    const payload = validateToken(token)

    return payload
  }

  throw new AuthenticationError("E0101", "Unable to authenticate")
}

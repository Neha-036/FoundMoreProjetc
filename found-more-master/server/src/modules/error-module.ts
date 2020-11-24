
export class MoreError extends Error {
  constructor(public type: string, public code: string, message?: string) {
    super((message || "An error has occurred") + " (" + code + ")")
  }
}

export class ServerError extends MoreError {
  constructor(code: string, message: string) {
    super("ServerError", code, message)
  }
}

export class NotFoundError extends MoreError {
  constructor(code: string, message?: string) {
    super("NotFoundError", code, message || "Not found")
  }
}

export class AuthorizationError extends MoreError {
  constructor(code: string, message?: string) {
    super("AuthorizationError", code, message || "Unauthorized")
  }
}

export class AuthenticationError extends MoreError {
  constructor(code: string, message?: string) {
    super("AuthenticationError", code, message || "Unauthenticated")
  }
}

export class ValidationError extends MoreError {
  constructor(code: string, message?: string) {
    super("ValidationError", code, message || "Validation error")
  }
}

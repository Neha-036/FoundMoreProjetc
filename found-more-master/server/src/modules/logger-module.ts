
// A custom logger module, so we can actually write "logs" during excel import

export interface ILogger {
  warn(message?: any, ...optionalParams: any[]): void
  log(message?: any, ...optionalParams: any[]): void
}

interface IMessage {
  type: "warn" | "log",
  message?: any,
  optionalParams: any[]
}

export class FoundLogger implements ILogger {

  messages: IMessage[] = []

  warn(message?: any, ...optionalParams: any[]) {
    console.warn(message, ...optionalParams)
    this.messages.push({
      type: "warn",
      message,
      optionalParams,
    })
  }

  log(message?: any, ...optionalParams: any[]) {
    console.log(message, ...optionalParams)
    this.messages.push({
      type: "log",
      message,
      optionalParams,
    })
  }

  getMessagesAsString() {
    return this.messages.map((m) => `${m.message}${m.optionalParams}`).join("\n")
  }
}

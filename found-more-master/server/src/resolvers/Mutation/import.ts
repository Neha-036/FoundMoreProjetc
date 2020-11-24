import * as unzip from "unzipper"
import { AuthorizationError } from "../../modules/error-module"
import { importExcel, importPartialExcel } from "../../modules/import-module"
import { FoundLogger } from "../../modules/logger-module"
import { createNotificationForImportLog } from "../../modules/notification-module"
import { hasPermission } from "../../modules/user-module"
import { Context, FileUpload } from "../../typings"

export async function brandImport(parent, args: { excel: Promise<FileUpload> }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "CREATE_ALL", "BRAND")

  if (!authorized) throw new AuthorizationError("E1401")

  const uploadedExcel = await args.excel
  const path = "/tmp/" + (new Date()).getTime() + "/"

  await uploadedExcel.stream
    .pipe(unzip.Extract({ path }))
    .promise()

  const logger = new FoundLogger()

  // For now, start the task async
  importExcel(ctx.db, logger, path)
    .then(() => createNotificationForImportLog(ctx, logger))
    .catch(async (e) => {
      logger.warn("Error during import: " + e.message)
      createNotificationForImportLog(ctx, logger)
    })

  return true
}

export async function partialImport(parent, args: { domain: string, excel: Promise<FileUpload> }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "CREATE_ALL", "STORE") && await hasPermission(ctx, "CREATE_ALL", "ORDER")

  if (!authorized) throw new AuthorizationError("E1402")

  const uploadedExcel = await args.excel
  const path = "/tmp/" + (new Date()).getTime() + "/"

  await uploadedExcel.stream
    .pipe(unzip.Extract({ path }))
    .promise()

  const logger = new FoundLogger()

  // For now, start the task async
  importPartialExcel(ctx.db, console, args.domain, path)
    .then(() => createNotificationForImportLog(ctx, logger))
    .catch(async (e) => {
      logger.warn("Error during import: " + e.message)
      createNotificationForImportLog(ctx, logger)
    })

  return true
}

import { BrandCreateInput, BrandUpdateInput, BrandWhereUniqueInput } from "../../generated/prisma"
import { AuthorizationError } from "../../modules/error-module"
import { uploadAndCreateManyFiles } from "../../modules/file-module"
import { hasBrand, hasPermission } from "../../modules/user-module"
import { Context, FileUpload } from "../../typings"

export async function createBrand(parent, args: { input: BrandCreateInput, logo?: Promise<FileUpload>, backgroundImage?: Promise<FileUpload> }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "CREATE_ALL", "BRAND")

  if (!authorized) throw new AuthorizationError("E0501")

  // Check for logo/backgroundImage
  const fileUploads = [] as Array<Promise<FileUpload>>
  if (args.logo) fileUploads.push(args.logo)
  if (args.backgroundImage) fileUploads.push(args.backgroundImage)

  const files = await uploadAndCreateManyFiles(ctx.db, fileUploads)

  if (args.logo) args.input.logo = { connect: files.shift() } // notice the use of shift
  if (args.backgroundImage) args.input.backgroundImage = { connect: files.shift() }

  return ctx.db.mutation.createBrand({ data: args.input }, info)
}

export async function updateBrand(parent, args: { input: BrandUpdateInput; where: BrandWhereUniqueInput, logo?: Promise<FileUpload>, backgroundImage?: Promise<FileUpload> }, ctx: Context, info) {

  const authorized =
    await hasPermission(ctx, "UPDATE_ALL", "BRAND") ||
    (
      await hasPermission(ctx, "UPDATE_OWN", "BRAND") &&
      await hasBrand(ctx, args.where)
    )

  if (!authorized) throw new AuthorizationError("E0502")

  // Check for logo/backgroundImage
  const fileUploads = [] as Array<Promise<FileUpload>>
  if (args.logo) fileUploads.push(args.logo)
  if (args.backgroundImage) fileUploads.push(args.backgroundImage)

  const files = await uploadAndCreateManyFiles(ctx.db, fileUploads)

  if (args.logo) args.input.logo = { connect: files.shift() } // notice the use of shift
  if (args.backgroundImage) args.input.backgroundImage = { connect: files.shift() }

  return ctx.db.mutation.updateBrand({ data: args.input, where: args.where }, info)
}

import { StoreCreateInput, StoreUpdateInput, StoreWhereUniqueInput } from "../../generated/prisma"
import { AuthorizationError } from "../../modules/error-module"
import { uploadAndCreateManyFiles } from "../../modules/file-module"
import { getBrandId, hasPermission, hasStore } from "../../modules/user-module"
import { Context, FileUpload } from "../../typings"

export async function createStore(parent, args: { input: StoreCreateInput, image?: Promise<FileUpload>, files?: Array<Promise<FileUpload>> }, ctx: Context, info) {

  const canMakeStoreForAnyBrand = await hasPermission(ctx, "CREATE_ALL", "STORE")

  const authorized = canMakeStoreForAnyBrand || await hasPermission(ctx, "CREATE_OWN", "STORE")

  if (!authorized) throw new AuthorizationError("E0701")

  const brandId = await getBrandId(ctx)

  // Either the user can make a store for any brand or no brand is given in the input.
  if (!canMakeStoreForAnyBrand || !args.input.brand) {
    args.input.brand = { connect: { id: brandId } }
  }

  // Check for files/images
  let fileUploads = [] as Array<Promise<FileUpload>>
  if (args.image) fileUploads.push(args.image)
  if (args.files) fileUploads = fileUploads.concat(args.files)

  const files = await uploadAndCreateManyFiles(ctx.db, fileUploads)

  if (args.image) args.input.image = { connect: files.shift() } // notice the use of shift
  if (args.files) args.input.files = { connect: files }

  // Create the store
  return ctx.db.mutation.createStore({ data: args.input }, info)
}

export async function updateStore(parent, args: { input: StoreUpdateInput; where: StoreWhereUniqueInput, image?: Promise<FileUpload>, files?: Array<Promise<FileUpload>> }, ctx: Context, info) {

  const authorized =
    await hasPermission(ctx, "UPDATE_ALL", "STORE") ||
    (
      await hasPermission(ctx, "UPDATE_OWN", "STORE") &&
      await hasStore(ctx, args.where)
    )

  if (!authorized) throw new AuthorizationError("E0702")

  // Check for files/images
  let fileUploads = [] as Array<Promise<FileUpload>>
  if (args.image) fileUploads.push(args.image)
  if (args.files) fileUploads = fileUploads.concat(args.files)

  const files = await uploadAndCreateManyFiles(ctx.db, fileUploads)

  if (args.image) args.input.image = { connect: files.shift() } // notice the use of shift
  if (args.files) args.input.files = { ...args.input.files, connect: files }

  return ctx.db.mutation.updateStore({ data: args.input, where: args.where }, info)
}

export async function deleteStore(parent, args: { where: StoreWhereUniqueInput }, ctx: Context, info) {

  const authorized =
    await hasPermission(ctx, "DELETE_ALL", "STORE") ||
    (
      await hasPermission(ctx, "DELETE_OWN", "STORE") &&
      await hasStore(ctx, args.where)
    )

  if (!authorized) throw new AuthorizationError("E0703")

  // We no longer delete the store, we only set the deletedAt field.
  return ctx.db.mutation.updateStore({ where: args.where, data: { deletedAt: new Date() } }, info)
}
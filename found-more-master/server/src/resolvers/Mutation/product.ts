import { ProductCreateInput, ProductUpdateInput, ProductWhereUniqueInput } from "../../generated/prisma"
import { AuthorizationError } from "../../modules/error-module"
import { uploadAndCreateManyFiles } from "../../modules/file-module"
import { hasPermission } from "../../modules/user-module"
import { Context, FileUpload } from "../../typings"

export async function createProduct(parent, args: { input: ProductCreateInput, images?: Array<Promise<FileUpload>> }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "CREATE_ALL", "PRODUCT")

  if (!authorized) throw new AuthorizationError("E1001")

  // Check for images
  if (args.images) {
    const files = await uploadAndCreateManyFiles(ctx.db, args.images)

    args.input.properties.create.images = { connect: files }
  }

  return ctx.db.mutation.createProduct({ data: args.input }, info)
}

export async function updateProduct(parent, args: { input: ProductUpdateInput, where: ProductWhereUniqueInput, images?: Array<Promise<FileUpload>> }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "UPDATE_ALL", "PRODUCT")

  if (!authorized) throw new AuthorizationError("E1002")

  // Check for images
  if (args.images) {

    const files = await uploadAndCreateManyFiles(ctx.db, args.images)

    args.input.properties
      ? args.input.properties.update.images = { ...args.input.properties.update.images, connect: files }
      : args.input.properties = { update: { images: { connect: files } } }
  }

  return ctx.db.mutation.updateProduct({ data: args.input, where: args.where }, info)
}

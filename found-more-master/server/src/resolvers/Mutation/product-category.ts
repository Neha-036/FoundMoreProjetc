import { ProductCategoryCreateInput, ProductCategoryUpdateInput, ProductCategoryWhereUniqueInput } from "../../generated/prisma"
import { AuthorizationError } from "../../modules/error-module"
import { uploadAndCreateManyFiles } from "../../modules/file-module"
import { hasPermission } from "../../modules/user-module"
import { Context, FileUpload } from "../../typings"

export async function createProductCategory(parent, args: { input: ProductCategoryCreateInput, images?: Array<Promise<FileUpload>> }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "CREATE_ALL", "PRODUCT")

  if (!authorized) throw new AuthorizationError("E0201")

  // Check for a images
  if (args.images) {

    const files = await uploadAndCreateManyFiles(ctx.db, args.images)

    args.input.properties
      ? args.input.properties.create.images = { connect: files }
      : args.input.properties = { create: { images: { connect: files } } }
  }

  return ctx.db.mutation.createProductCategory({ data: args.input }, info)
}

export async function updateProductCategory(parent, args: { input: ProductCategoryUpdateInput, where: ProductCategoryWhereUniqueInput, images?: Array<Promise<FileUpload>> }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "UPDATE_ALL", "PRODUCT")

  if (!authorized) throw new AuthorizationError("E0202")

  // Check for images
  if (args.images) {

    const files = await uploadAndCreateManyFiles(ctx.db, args.images)

    args.input.properties
      ? args.input.properties.update.images = { ...args.input.properties.update.images, connect: files }
      : args.input.properties = { update: { images: { connect: files } } }
  }

  return ctx.db.mutation.updateProductCategory({ data: args.input, where: args.where }, info)
}

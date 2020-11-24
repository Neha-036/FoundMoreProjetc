import { OrderTemplateCreateInput, OrderTemplateUpdateInput, OrderTemplateWhereUniqueInput } from "../../generated/prisma"
import { AuthorizationError } from "../../modules/error-module"
import { uploadAndCreateManyFiles } from "../../modules/file-module"
import { createFileFromOrderTemplate } from "../../modules/graphviz-module"
import { hasPermission } from "../../modules/user-module"
import { Context, FileUpload } from "../../typings"

export async function createOrderTemplate(parent, args: { input: OrderTemplateCreateInput, images?: Array<Promise<FileUpload>> }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "CREATE_ALL", "PRODUCT")

  if (!authorized) throw new AuthorizationError("E0901")

  // Check for a images
  if (args.images) {
    const files = await uploadAndCreateManyFiles(ctx.db, args.images)

    args.input.properties
      ? args.input.properties.create.images = { connect: files }
      : args.input.properties = { create: { images: { connect: files } } }
  }

  return ctx.db.mutation.createOrderTemplate({ data: args.input }, info)
}

export async function updateOrderTemplate(parent, args: { input: OrderTemplateUpdateInput, where: OrderTemplateWhereUniqueInput, images?: Array<Promise<FileUpload>> }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "UPDATE_ALL", "PRODUCT")

  if (!authorized) throw new AuthorizationError("E0902")

  // Check for a images
  if (args.images) {
    const files = await uploadAndCreateManyFiles(ctx.db, args.images)

    args.input.properties
      ? args.input.properties.update.images = { ...args.input.properties.update.images, connect: files }
      : args.input.properties = { update: { images: { connect: files } } }
  }

  return ctx.db.mutation.updateOrderTemplate({ data: args.input, where: args.where }, info)
}

export async function orderTemplateImage(parent, args: { where: OrderTemplateWhereUniqueInput }, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "VIEW_ALL", "PRODUCT")

  if (!authorized) throw new AuthorizationError("E0903")

  const { file } = await createFileFromOrderTemplate(ctx.db, args.where)

  return file
}

export async function setOrderTemplateOrder(parent, args: { direction: "up" | "down", where: OrderTemplateWhereUniqueInput }, ctx: Context, info) {

  // Notice that we assume that the front-end knows how to sort. So this is actually a quick and dirty solution.
  const authorized = await hasPermission(ctx, "UPDATE_ALL", "PRODUCT")
  if (!authorized) throw new AuthorizationError("E0904")

  // Get the ordertemplate
  const ot = await ctx.db.query.orderTemplate({ where: args.where }, '{ id parent { id } brand { id } }')

  // If the ot has a parent, update siblings. Else, update parent-less ot's of the brand.
  const query = ot.parent ? { parent: { id: ot.parent.id } } : { brand: { id: ot.brand.id }, parent: null }
  const ots = await ctx.db.query.orderTemplates({ where: query, orderBy: 'sortIndex_ASC' }, '{ id sortIndex }')

  // Re-order, if possible
  const index = ots.findIndex(other => other.id === ot.id)
  const newIndex = args.direction === "up" ? index - 1 : index + 1
  if (newIndex >= 0 && newIndex < ots.length) {
    const help = ots[index]
    ots[index] = ots[newIndex]
    ots[newIndex] = help
  }

  console.log(ots.map(o => o.id))

  // Update new index
  for (let i = 0; i < ots.length; i++) {
    const other = ots[i];
    await ctx.db.mutation.updateOrderTemplate({ where: { id: other.id }, data: { sortIndex: i } })
  }

  return ctx.db.query.orderTemplates({ where: { id_in: ots.map(o => o.id) }, orderBy: 'sortIndex_ASC' }, info)
}
import { BrandWhereUniqueInput } from "../../generated/prisma"
import { AuthorizationError } from "../../modules/error-module"
import { exportBrandData } from "../../modules/export-module"
import { getUserId } from "../../modules/token-module"
import { hasBrand, hasPermission } from "../../modules/user-module"
import { Context } from "../../typings"

export async function brandExport(parent, args: { where: BrandWhereUniqueInput, type: "found" | "default"}, ctx: Context, info) {

  const authorized = await hasPermission(ctx, "VIEW_ALL", "BRAND") ||
    (
      await hasPermission(ctx, "VIEW_OWN", "BRAND") &&
      await hasBrand(ctx, args.where)
    )

  if (!authorized) throw new AuthorizationError("E1501")

  return await exportBrandData(ctx.db, getUserId(ctx), args.type, args.where)
}

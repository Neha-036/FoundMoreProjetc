import { Context } from "../typings"

export function getBrandName(ctx: Context) {

  // Note: If we don't have a subdomain (in tests). We return "ring" by default.
  try {
    return (ctx.req.headers.origin as string).replace(/(^\w+:|^)\/\//, "").split(".")[0]
  } catch (e) {
    console.warn("Unable to determine brand name based on request.origin")
    return "ring"
  }
}

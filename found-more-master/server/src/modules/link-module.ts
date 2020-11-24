
function getPortPostFix(protocol: string, port: number) {

  return (protocol === "https" && port === 443) || (protocol === "http" && port === 80) ? "" : ":" + port
}

export function getBaseLink(domain: string) {

  const protocol = process.env.FRONTEND_PROTOCOL || "http"
  const port = parseInt(process.env.FRONTEND_PORT, 10) || 3000
  const host = process.env.FRONTEND_HOST || "localhost"

  return `${protocol}://${domain}.${host}${getPortPostFix(protocol, port)}`
}

export function getLink(domain: string, link?: string) {
  return `${getBaseLink(domain)}${link}`
}

export function getClientDashboardLink(domain: string) {
  return getLink(domain, "")
}

export function getClientOrderLink(domain: string, orderId: string) {
  return getLink(domain, `/orders/detail/${orderId}`)
}

export function getClientOrdersLink(domain: string) {
  return getLink(domain, "/orders")
}

export function getClientResetPasswordLink(domain: string, token: string) {
  return getLink(domain, `/password-reset-confirmation?token=${token}`)
}

export function getClientHelpdeskLink(domain: string) {
  return getLink(domain, "/support")
}

export function getClientEmailPreferencesLink(domain: string) {
  return getLink(domain, "/userdetails")
}

export function getFoundOrderLink(orderId: string) {
  return getLink("admin", `/orders?search=${orderId}`)
}

export function getFoundOrdersLink() {
  return getLink("admin", `/orders`)
}

export function getFoundDashboardLink() {
  return getLink("admin")
}

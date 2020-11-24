import { format } from "date-fns"

export { getClientHelpdeskLink, getClientEmailPreferencesLink, getClientDashboardLink } from "../link-module"

export function formatDate(date, fmt) {
  return format(date, fmt)
}

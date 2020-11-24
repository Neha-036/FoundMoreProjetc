import { STATUSES } from "../constants"

export const getStatusColor = status => { 
  const res = STATUSES.filter(stat => stat.value === status)
  if (!!res.length) return res[0].color
  return "#000"
}
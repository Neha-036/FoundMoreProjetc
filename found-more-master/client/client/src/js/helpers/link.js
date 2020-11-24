import React from 'react'
import { Link } from 'react-router-dom'

export default ({ to, children, ...props }) =>
  /^https?:\/\//.test(to) ? (
    <a href={to}>{children}</a>
  ) : (
    <Link {...props} to={to}>
      {children}
    </Link>
  )

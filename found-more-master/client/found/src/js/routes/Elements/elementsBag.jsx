import React from 'react'

export const ElementsBag = React.createContext(null)
export const withElementsBag = Component => props => (
  <ElementsBag.Consumer>
    {bag => <Component {...bag} {...props} />}
  </ElementsBag.Consumer>
)

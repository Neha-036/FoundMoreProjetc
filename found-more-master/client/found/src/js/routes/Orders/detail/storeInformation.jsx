import React from 'react'

export default ({ store }) => (
  <React.Fragment>
    <h4>Store</h4>
    <p>{store.name}</p>
    <h4>Address</h4>
    <p>{`${store.address.street} ${store.address.number} ${store.address
      .addition || ''}`}</p>
    <p>{store.address.postalCode}</p>
    <p>{`${store.address.city}, ${store.address.countryCode}`}</p>
  </React.Fragment>
)

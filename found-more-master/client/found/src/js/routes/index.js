import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthRoute } from '@/utils'
import Login from './Login'
import PasswordResetConfirmation from './PasswordResetConfirmation'
import Dashboard from './Dashboard'
import Users from './Users'
import Brands from './Brands'
import Stores from './Stores'
import Items from './Items'
import Orders from './Orders'
import Elements from './Elements'
import Import from './Import'
import NotFound from './NotFound'
import Support from './Support'
import Analytics from '../fragments/analytics'

const Router = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route
      exact
      path="/password-reset-confirmation"
      component={PasswordResetConfirmation}
    />
    <div>
      <Analytics />
      <AuthRoute exact path="/" component={Dashboard} />
      <AuthRoute exact path="/users" component={Users} />
      <AuthRoute exact path="/stores" component={Stores} />
      <AuthRoute exact path="/items" component={Items} />
      <AuthRoute exact path="/brands" component={Brands} />
      <AuthRoute exact path="/elements" component={Elements} />
      <AuthRoute exact path="/orders" component={Orders} />
      <AuthRoute exact path="/import" component={Import} />
      <AuthRoute exact path="/faq" component={Support} />
    </div>
    <Route component={NotFound} />
  </Switch>
)

export default Router

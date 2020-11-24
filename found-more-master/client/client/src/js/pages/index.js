import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import AuthRoute from '../helpers/authRoute'
import Dashboard from './dashboard'
import Login from './login'
import UserDetails from './user-details'
import Stores from './stores'
import Projects from './projects'
import Support from './support'
import MyOrder from './my-order'
import Orders from './orders'
import { Wrapper } from '../components/fragments/wrapper'
import Header from '../components/layout/header'
import Spacing from '../components/fragments/spacing'
import Notification from '../components/notification'
import SetNewPwd from '../components/setNewPwd'
import OpenOrdersList from '../components/open-orders-list'
// import Analytics from '../components/fragments/analytics'
import ManageStores from './manage-stores'
import ManageUsers from './manage-users'

export default () => (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/password-reset-confirmation" component={SetNewPwd} />
      <Wrapper>
        {/* <Analytics /> */}
        <Header />
        <Spacing space="80px" />
        <Notification />
        <AuthRoute exact path="/" component={Dashboard} />
        <AuthRoute exact path="/userdetails" component={UserDetails} />
        <AuthRoute exact path="/userdetails/stores" component={ManageStores} />
        <AuthRoute exact path="/userdetails/users" component={ManageUsers} />
        <AuthRoute exact path="/stores" component={Stores} />
        <AuthRoute path="/projects" component={Projects} />
        <AuthRoute exact path="/support" component={Support} />
        <AuthRoute exact path="/myorder" component={MyOrder} />
        <AuthRoute path="/orders" component={Orders} />
        <AuthRoute path="/openorders" component={OpenOrdersList} />
      </Wrapper>
    </Switch>
  </Router>
)

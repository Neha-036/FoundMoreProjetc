import React from 'react'
import OrderSidebar from '@/components/layout/order-sidebar'
import ProjectsList from '@/components/projects-list'
import AuthRoute from '@/helpers/authRoute'
import SelectStores from '@/components/select-stores'
import ProjectDetail from '@/components/project-detail'

const Projects = () => (
  <OrderSidebar>
    <AuthRoute exact path="/projects" component={ProjectsList} />
    <AuthRoute
      exact
      path="/projects/store-selection"
      component={SelectStores}
    />
    <AuthRoute exact path="/projects/detail/:id" component={ProjectDetail} />
  </OrderSidebar>
)

export default Projects

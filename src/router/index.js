import React from 'react'
import Loadable from 'react-loadable'
import Router from '../utils/router'
import Home from '../views/Home'
import User from '../views/User'
import NotMatch from '../components/NotMatch'
import Login from '../views/Login'
import UserInfo from '../views/UserInfo'
import AppLayout from '../components/AppLayout'
import Dashboard from '../views/Dashboard'
import Test from '../views/Test'

const Loading = () => <div>Loading...</div>

const page = name => {
  return Loadable({
    loader: () => import('@/views/' + name),
    loading: Loading
  })
}


console.log(page('components/button'), Home)

const router = new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/user', component: User},
    {path: '/login', component: Login},
    {path: '/user/:userId', component: UserInfo},
    {
      path: '/admin',
      component: AppLayout,
      name: 'admin-view',
      children: [
        {path: '/', component: Dashboard},
        {path: '/user', component: page('user')},
        {path: '/test', component: Test},
        {path: '/redux-demo', component: page('ReduxDemo')},
        {path: '/model', component: page('Model')},
        // {path: '/components/button', component: MButton},
        {path: '/components/button', component: page('components/button')},
        {path: '/components/tabs', component: page('components/tabs')},
        {name: 404, component: NotMatch}
      ]
    },
    {name: 404, component: NotMatch}
  ]
})

function RouterView (props) {
  return router.view(props.view)
}

const routes = router.routerMap

export {
  RouterView as default,
  routes,
  RouterView
}

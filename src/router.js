import React from 'react'
import Loadable from 'react-loadable'
import Router from 'react-concise-router'
import QueueAnim from 'rc-queue-anim'
import nprogress from 'nprogress'
import Home from './views/Home'
import User from './views/User'
import NotMatch from './components/NotMatch'
import Login from './views/Login'
import UserInfo from './views/UserInfo'
import AppLayout from './components/AppLayout'
import Dashboard from './views/Dashboard'
import Test from './views/Test'

const Loading = () => <div>Loading...</div>

function animWrapper (Page) {
  return function Anim (props) {
    return (
      <QueueAnim type={['right', 'left']} ><Page key="page" {...props} /></QueueAnim>
    )
  }
}

const page = name => {
  return Loadable({
    loader: () => import('@/views/' + name),
    loading: Loading
  })
}

const router = new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/user', component: User },
    { path: '/login', component: Login },
    { path: '/user/:userId', component: UserInfo },
    {
      path: '/admin',
      component: AppLayout,
      name: 'admin-view',
      children: [
        { path: '/', component: animWrapper(Dashboard) },
        { path: '/user', component: animWrapper(page('User')) },
        { path: '/test', component: Test },
        { path: '/redux-demo', component: page('ReduxDemo') },
        { path: '/model', component: page('Model') },
        { path: '/components/button', component: animWrapper(page('components/button'))} ,
        { path: '/components/tabs', component: page('components/tabs') },
        { name: 404, component: NotMatch }
      ]
    },
    { name: 404, component: NotMatch }
  ]
})

router.beforeEach = function (ctx, next) {
  nprogress.start()
  next()

  nprogress.inc(0.4)

  setTimeout(() => {
    nprogress.done()
  }, 300)
}

export default router

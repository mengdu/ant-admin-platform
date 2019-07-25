import React from 'react'
import Loadable from 'react-loadable'
import Router from 'react-concise-router'
import QueueAnim from 'rc-queue-anim'
import nprogress from 'nprogress'
import AppLayout from './components/AppLayout'
import Home from './views/Home'
import Login from './views/Login'
import NotMatch from './components/NotMatch'
import Dashboard from './views/admin/Dashboard'
import Page1 from './views/admin/Page1'
import Page2 from './views/admin/Page2'

const Loading = () => <div>Loading...</div>

function animWrapper (Page) {
  return function Anim (props) {
    return (
      <QueueAnim type={['right', 'left']} ><Page key="page" {...props} /></QueueAnim>
    )
  }
}

const ReducDemo = Loadable({
  loader: () => import('@/views/admin/ReduxDemo'),
  loading: Loading
})

const router = new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    {
      path: '/admin',
      component: AppLayout,
      name: 'admin-view',
      admin: true,
      children: [
        { path: '/', component: animWrapper(Dashboard), label: 'Dashboard', icon: 'dashboard' },
        { path: '/redux-demo', component: animWrapper(ReducDemo), label: 'ReduxDemo', icon: 'appstore-o' },
        { path: '/page1', component: animWrapper(Page1), label: 'Page1', icon: 'eye-o' },
        { path: '/page2', component: animWrapper(Page2), label: 'Page2', icon: 'eye-o' },
        { name: 404, component: NotMatch, show: false }
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

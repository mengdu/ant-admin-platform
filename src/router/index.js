import Router from '../utils/router'
import Home from '../views/Home'
import User from '../views/User'
import UserInfo from '../views/UserInfo'

export default new Router({
  routes: [
    {path: '/', component: Home},
    {path: '/user', component: User},
    {path: '/user/:userId', component: UserInfo}
  ]
})

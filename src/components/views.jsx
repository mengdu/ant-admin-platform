import React from 'react'
import Home from '../views/Home'
import User from '../views/User'
import UserInfo from '../views/UserInfo'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom'


class View extends React.Component {
  render () {
    return (
      <Router>
        <div>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
          <Route exact path="/" component={Home}/>
          <Route exact path="/user" component={User}/>
          {/*<Route exact path="/user/info" component={UserInfo}/>*/}
          <Redirect from="/user/info" to="/user" />
        </div>
      </Router>
    )
  }
}

export default View

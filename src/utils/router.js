import React from 'react'
import {Route} from 'react-router-dom'

export default class Router {
  constructor (router) {
    let isExact = typeof router.exact !== 'undefined' ? router.exact : true
    return function () {
      return router.routes.map((router, index) => {
        return (
          <Route
            exact={isExact}
            path={router.path}
            key={router.path + '' + index}
            component={router.component}
            />
        )
      })
    }
  }
}

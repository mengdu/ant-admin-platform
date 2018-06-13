import React from 'react'
import ReactDOM from 'react-dom'
import './assets/main.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import pkg from '../package.json'

React.Component.prototype.$app = pkg

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()

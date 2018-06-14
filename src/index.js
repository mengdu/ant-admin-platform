import React from 'react'
import ReactDOM from 'react-dom'
import {message, Modal, notification} from 'antd'
import './assets/main.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import pkg from '../package.json'
import config from './config'

React.Component.prototype.$app = pkg
React.Component.prototype.$config = config
React.Component.prototype.$msg = message
React.Component.prototype.$modal = Modal
React.Component.prototype.$notification = notification


const app = ReactDOM.render(<App />, document.getElementById('root'))
window.app = app
registerServiceWorker()

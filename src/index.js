import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {message, Modal, notification} from 'antd'
import './assets/main.css'
import App from './App'
import store from './redux'
import registerServiceWorker from './registerServiceWorker'
import pkg from '../package.json'
import config from './config'

React.Component.prototype.$app = pkg
React.Component.prototype.$config = config
React.Component.prototype.$msg = message
React.Component.prototype.$modal = Modal
React.Component.prototype.$notification = notification


const app = ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
window.app = app
registerServiceWorker()

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {message, Modal, notification} from 'antd'
import axios from './utils/axios'
import model from './utils/model'
import * as api from './api'
import App from './App'
import store from './redux'
import registerServiceWorker from './registerServiceWorker'
import pkg from '../package.json'
import config from './config'
import 'nprogress/nprogress.css'
import './assets/main.css'

React.Component.prototype.$app = pkg
React.Component.prototype.$config = config
React.Component.prototype.$msg = message
React.Component.prototype.$modal = Modal
React.Component.prototype.$notification = notification
React.Component.prototype.$fetch = axios
React.Component.prototype.$api = api
React.Component.prototype.$store = store
// 双向绑定
React.Component.prototype.model = model


const app = ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root'),
  () => {
    // 设置应用加载进度 window.AppProgress 来自index.html
    if (window.AppProgress) {
      window.AppProgress.style = '100%'
    }
  }
)

const isDev = process.env.NODE_ENV === 'development'
window.$app = {
  pkg,
  env: process.env
}
window.api = isDev ? api : undefined
window.app = isDev ? app : undefined

registerServiceWorker()

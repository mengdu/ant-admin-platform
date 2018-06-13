import React from 'react'
import {Icon} from 'antd'

export default class AppFooter extends React.Component {
  render () {
    return (
      <div className="text-center">
        <Icon type="chrome" /> ant-admin-platform Make by <a href="https://github.com/mengdu" >@Lanyue</a>
      </div>
    )
  }
}
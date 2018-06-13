import React from 'react'
import {Icon} from 'antd'

let versionStyle = {
  backgroundColor: 'rgba(64,158,255,.1)',
  padding: '0 10px',
  height: '32px',
  lineHeight: '30px',
  fontSize: '12px',
  color: '#409eff',
  borderRadius: '4px',
  boxSizing: 'border-box',
  border: '1px solid rgba(64,158,255,.2)',
}
export default class AppFooter extends React.Component {
  render () {
    return (
      <div className="text-center">
        <Icon type="ant-design" /> ant-admin-platform Make by &nbsp;
        <a href={this.$app.authorHome || '#'} >{this.$app.author}</a>&nbsp;
        <span >version: <span style={versionStyle}>{this.$app.version}</span></span>
      </div>
    )
  }
}
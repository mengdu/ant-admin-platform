import React from 'react'
import {Breadcrumb} from 'antd'

export default class User extends React.Component {
  render () {
    console.log(this.$app)
    // console.log(this.props)
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 16px' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="m-box">User</div>
      </div>
    )
  }
}

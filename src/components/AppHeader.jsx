import React from 'react'
import {Layout, Menu, Icon} from 'antd'
import {Link} from 'react-router-dom'
const {Header} = Layout

export default class AppHeader extends React.Component {
  render () {
    return (
      <Header>
        <div className="f-left">
          <Icon
            className="trigger"
            type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.props.onClick}
            />
        </div>
        <div>
          <Menu
            theme="dark"
            mode="horizontal"
            >
            <Menu.Item key="1"><Link to="/admin">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/admin/user">User</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/admin/test">Test</Link></Menu.Item>
            <Menu.Item key="4">Github</Menu.Item>
            <Menu.Item key="5">About</Menu.Item>
          </Menu>
        </div>
      </Header>
    )
  }
}

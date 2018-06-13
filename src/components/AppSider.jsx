import React from 'react'
import {Layout, Menu, Icon} from 'antd'
const {SubMenu} = Menu
const {Sider} = Layout

export default class AppSider extends React.Component {
  render () {
    return (
      <Sider collapsed={this.props.collapsed} trigger={null}>
        <div className="logo" ></div>
        <Menu
          theme="dark"
          mode="inline"
        >
          <SubMenu key="sub1" title={<div><Icon type="user" /><span>subnav 1</span></div>}>
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<div><Icon type="laptop" /><span>subnav 2</span></div>}>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<div><Icon type="notification" /><span>subnav 3</span></div>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
          <Menu.Item key="111">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}


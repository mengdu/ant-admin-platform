import React from 'react'
import {Layout, Menu, Icon} from 'antd'
import {Link} from 'react-router-dom'
const {SubMenu} = Menu
const {Sider} = Layout

export default class AppSider extends React.Component {
  render () {
    return (
      <Sider collapsed={this.props.collapsed} trigger={null}>
        <div className="logo-box" >
          <img className="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" />
          <span className="title">Antd Platform </span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
        >
          <SubMenu key="sub1" title={<div><Icon type="dashboard" /><span>Dashboard</span></div>}>
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="xxx" title={<div><Icon type="appstore-o" /><span>Components</span></div>}>
            <Menu.Item key="x5">option5</Menu.Item>
            <Menu.Item key="x6">option6</Menu.Item>
            <Menu.Item key="x7">option7</Menu.Item>
            <Menu.Item key="x8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<div><Icon type="contacts" /><span>Users</span></div>}>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<div><Icon type="eye-o" /><span>Pages</span></div>}>
            <Menu.Item key="404"><Link to="/404" >全局404</Link></Menu.Item>
            <Menu.Item key="404-in"><Link to="/admin/404" >页内404</Link></Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
          <SubMenu key="sss" title={<div><Icon type="setting" /><span>Setting</span></div>}>
            <Menu.Item key="sss"><Link to="/404" >全局404</Link></Menu.Item>
            <Menu.Item key="ss-in"><Link to="/admin/404" >页内404</Link></Menu.Item>
            <Menu.Item key="ssa">option10</Menu.Item>
            <Menu.Item key="aaaa">option11</Menu.Item>
            <Menu.Item key="sass">option12</Menu.Item>
          </SubMenu>
          <Menu.Item key="copyright">
            <Icon type="ant-design" />
            <span className="nav-text"><a href="https://pro.ant.design" >ant-design</a></span>
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}


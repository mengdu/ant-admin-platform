import React from 'react'
import {Layout, Menu, Icon} from 'antd'
import {Link} from 'react-router-dom'
const {SubMenu} = Menu
const {Sider} = Layout

function generateMenu (menus, isSubmenu) {
  let items = []
  items = menus.map(menu => {
    if (Array.isArray(menu.submenu)) {
      return (
        <SubMenu key={menu.key} title={<div><Icon type={menu.icon} /><span>{menu.text}</span></div>}>
          {generateMenu(menu.submenu, true)}
        </SubMenu>
      )
    } else {
      return (
        <Menu.Item key={menu.key}>
          {menu.type === 'a'
            ? <a href={menu.path} >{menu.icon ? <Icon type={menu.icon} /> : ''}<span className="nav-text">{menu.text}</span></a>
            : <Link to={menu.path} >{menu.icon ? <Icon type={menu.icon} /> : ''}<span className="nav-text">{menu.text}</span></Link>
          }
        </Menu.Item>
      )
    }
  })
  return items
}

export default class AppSider extends React.Component {
  state = {
    menu: [
      {key: 'dashboard', path: '/admin', text: 'Dashboard', icon: 'dashboard'},
      {
        key: 'components',
        text: 'Components',
        icon: 'appstore-o',
        submenu: [
          {key: 'm-button', path: '/admin/components/button', text: 'MButton'}
        ]
      },
      {
        key: 'users',
        text: 'Users',
        icon: 'contacts',
        submenu: [
          {key: 'user', path: '/admin/user', text: 'user'}
        ]
      },
      {
        key: 'pages',
        text: 'Pages',
        icon: 'eye-o',
        submenu: [
          {key: 'g-404', path: '/404', text: '全局404'},
          {key: '404', path: '/admin/404', text: '404'},
          {key: 'redux-demo', path: '/admin/redux-demo', text: 'redux-demo'}
        ]
      },
      {
        key: 'setting',
        text: 'Setting',
        icon: 'setting',
        submenu: [
          {key: 'test', text: 'Test', path: '/'}
        ]
      }
    ]
  }
  render () {
    return (
      <Sider collapsed={this.props.collapsed} trigger={null}>
        <div className="logo-box" >
          <img className="logo" src={this.$config.data.logo} alt="logo" />
          <span className="title">Antd Platform </span>
        </div>
        <Menu
          theme="dark"
          mode="inline"
        >
          {generateMenu(this.state.menu)}
          {/*<SubMenu key="sub1" title={<div><Icon type="dashboard" /><span>Dashboard</span></div>}>
            <Menu.Item key="1"><Link to="/admin" >Wellcome</Link></Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="xxx" title={<div><Icon type="appstore-o" /><span>Components</span></div>}>
            <Menu.Item key="button"><Link to="/admin/components/button" >MButton</Link></Menu.Item>
            <Menu.Item key="x6">option6</Menu.Item>
            <Menu.Item key="x7">option7</Menu.Item>
            <Menu.Item key="x8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<div><Icon type="contacts" /><span>Users</span></div>}>
            <Menu.Item key="5"><Link to="/admin/user" >user</Link></Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<div><Icon type="eye-o" /><span>Pages</span></div>}>
            <Menu.Item key="404"><Link to="/404" >全局404</Link></Menu.Item>
            <Menu.Item key="404-in"><Link to="/admin/404" >页内404</Link></Menu.Item>
            <Menu.Item key="10"><Link to="/admin/redux-demo" >redux-demo</Link></Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
          <SubMenu key="sss" title={<div><Icon type="setting" /><span>Setting</span></div>}>
            <Menu.Item key="sss"><Link to="/404" >全局404</Link></Menu.Item>
            <Menu.Item key="ss-in"><Link to="/admin/404" >页内404</Link></Menu.Item>
            <Menu.Item key="ssa"><Link to="/admin/redux-demo" >redux-demo</Link></Menu.Item>
            <Menu.Item key="aaaa">option11</Menu.Item>
            <Menu.Item key="sass">option12</Menu.Item>
          </SubMenu>
          <Menu.Item key="copyright">
            <a href="https://pro.ant.design" ><Icon type="ant-design" /><span>ant-design</span></a>
          </Menu.Item>
          <Menu.Item>
            <Link to="/admin/redux-demo" ><Icon type="ant-design" /><span>redux-demo</span></Link>
          </Menu.Item>*/}
        </Menu>
      </Sider>
    )
  }
}


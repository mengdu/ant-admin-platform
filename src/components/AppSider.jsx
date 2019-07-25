import React from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import router from '../router'

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
    menus: [
      // {key: 'dashboard', path: '/admin', text: 'Dashboard', icon: 'dashboard'},
      // {key: 'page1', path: '/admin/page1', text: 'Page1', icon: 'eye-o'},
      // {key: 'page2', path: '/admin/page2', text: 'Page2', icon: 'eye-o'},
      // {
      //   key: 'components',
      //   text: 'Components',
      //   icon: 'appstore-o',
      //   submenu: [
      //     {key: 'm-button', path: '/admin/components/button', text: 'MButton'}
      //   ]
      // },
      // {
      //   key: 'users',
      //   text: 'Users',
      //   icon: 'contacts',
      //   submenu: [
      //     {key: 'user', path: '/admin/user', text: 'user'}
      //   ]
      // }
    ]
  }

  componentDidMount () {

    const menus = router.routes
      .filter(e => e.admin)[0]
      .children
      .filter(e => e.show !== false)
      .map(e => {
        return {
          key: e.key || e.path,
          path: e.path,
          text: e.label,
          icon: e.icon || ''
        }
    })

    this.setState({
      menus: menus
    })
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
          {generateMenu(this.state.menus)}
        </Menu>
      </Sider>
    )
  }
}


import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom'
// import RouterView from '../router'
// import { Layout, Menu, Icon } from 'antd'
// const { Header, Sider, Content } = Layout

function User () {
  return <div>User</div>
}

function UserInfo () {
  return <div>UserInfo</div>
}

class View extends React.Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render () {
    return (
      <Router>
        <div>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
          {/*<RouterView />*/}
          <Route exact path="/user">
            <Route path="/info" component={UserInfo}/>
          </Route>
        </div>
        {/*<Layout className="app-layout">
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>nav 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>nav 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>nav 3</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <RouterView />
            </Content>
          </Layout>
        </Layout>*/}

      </Router>
    )
  }
}

export default View

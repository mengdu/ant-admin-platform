import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
// import RouterView from '../router'
// import { Layout, Menu, Icon } from 'antd'
// const { Header, Sider, Content } = Layout

function Home () {
  return (
    <div>
      <p>Home</p>
      <Switch>
        <Route exact path="/" component={Test}/>
        <Route exact path="/user" component={User}/>
        <Route exact path="/user/:userId" component={UserInfo}/>
        <Redirect from="/test" to="/user" />
        <Route path="" component={NotMatch} />
      </Switch>
    </div>
  )
}
function Test () {
  return <div>Home.index</div>
}
function User () {
  return <div>User</div>
}

function UserInfo () {
  return <div>UserInfo</div>
}

function NotMatch () {
  return <div style={{color: '#dc253d'}}>404 Not Found</div>
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

        <Link to="/">Home</Link>&nbsp;
        <Link to="/user">User</Link>&nbsp;
        <Link to="/user/1001">Info</Link>&nbsp;
        <Link to="/test">Redirect</Link>&nbsp;
        <Link to="/404">404</Link>
          {/*<RouterView />*/}
          {/*<Route exact path="/user">
            
          </Route>*/}
          <Switch>
            <Route exact path="/te" component={Test} />

            <Route path="/" component={Home} />

            {/*<Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/user" component={User}/>
              <Route exact path="/user/:userId" component={UserInfo}/>
              <Redirect from="/test" to="/user" />
              <Route exact component={NotMatch} />
            </Switch>*/}
            
          </Switch>
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

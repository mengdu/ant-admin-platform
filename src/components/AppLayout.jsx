import React, {Component} from 'react'
import {message, Layout, BackTop} from 'antd'
import {Redirect} from 'react-router-dom'
// import QueueAnim from 'rc-queue-anim'
import router from '../router'
import AppHeader from './AppHeader'
import AppSider from './AppSider'
import AppFooter from './AppFooter'

const {Content, Footer} = Layout

const NotAuth = (props) => {
  message.warning('请登录后再操作')
  return <Redirect to="/login" />
}

class App extends Component {
  state = {
    collapsed: false,
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    let user = localStorage.getItem('user')
    if (!user) {
      // message.warning('请登录后再操作')
      // return <Redirect to="/login" />
      return <NotAuth />
    }
    return (
      <Layout className="app-layout">
        <BackTop />
        <AppSider collapsed={this.state.collapsed}/>
        <Layout>
          <AppHeader onClick={this.toggle} collapsed={this.state.collapsed}/>
          <Content>
            <router.view name="admin-view"/>
          </Content>
          <Footer >
            <AppFooter />
          </Footer>
        </Layout>
        
      </Layout>
    )
  }
}

export default App

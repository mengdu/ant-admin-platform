import React from 'react'
import Texty from 'rc-texty'
import 'rc-texty/assets/index.css'
import MButton from '@/components/m-button'
import logo from '@/assets/logo.svg'
export default class Dashboard extends React.Component {
  
  render () {
    return (

      <div style={{ background: '#fff', padding: '50px', width: '1000px', margin: '0 auto', marginTop: '150px'}}>
        <div className="text-center"><img src={logo} alt="logo" /></div>
        <h1 className="text-center" style={{fontSize: '3rem', margin: '50px 0', fontFamily: 'Roboto', fontWeight: '100'}}>
          <Texty interval={20}>
          An admin platform based on Ant design.
          </Texty>
        </h1>
        <div className="text-center">
          <MButton round type="info" size="large" href="/">Home</MButton>
          <MButton plain round size="large" href="https://github.com/mengdu/ant-admin-platform">Github</MButton>
        </div>
      </div>
    )
  }
}

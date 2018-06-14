import React from 'react'
import {Button} from 'antd'

export default class Home extends React.Component {
  render () {
    return (
      <div className="middle-box">
        {/*<div className="m-box"></div>*/}
        <div><img src={this.$config.data.logo} alt="logo"/></div>
        <div style={{margin: '10px 0'}}><h1>Antd Platform</h1></div>
        <div><Button className="btn-block btn-lg" href="/admin">进入系统...</Button></div>
      </div>
    )
  }
}

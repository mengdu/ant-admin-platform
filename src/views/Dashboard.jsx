import React from 'react'
import {Button} from 'antd'

export default class Dashboard extends React.Component {
  render () {
    return (
      <div style={{margin: '0 -16px', background: '#fff', padding: '50px'}}>
        <div className="text-center"><img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" /></div>
        <h1 className="text-center" style={{fontSize: '3rem', marginTop: '50px'}}>An admin platform based on Ant design.</h1>
        <div className="text-center" >
          <Button type="primary" size="large" href="/">Home</Button>&nbsp;
          <Button size="large" href="https://github.com/mengdu/ant-admin-platform">Github</Button>
        </div>
      </div>
    )
  }
}

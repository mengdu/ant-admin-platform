import React from 'react'
import MButton from '@/components/m-button'

export default class Dashboard extends React.Component {
  render () {
    return (
      <div style={{margin: '0 -16px', background: '#fff', padding: '50px'}}>
        <div className="text-center"><img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" /></div>
        <h1 className="text-center" style={{fontSize: '3rem', marginTop: '100px', fontFamily: 'Roboto', fontWeight: '100'}}>An admin platform based on Ant design.</h1>
        <div className="text-center">
          <MButton round type="info" size="large" href="/">Home</MButton>
          <MButton plain round size="large" href="https://github.com/mengdu/ant-admin-platform">Github</MButton>
        </div>
      </div>
    )
  }
}

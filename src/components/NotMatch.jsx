import React from 'react'
import {Button} from 'antd'
import '../assets/404.css'
export default class NotMatch extends React.Component {
  handlerBack () {
    this.props.history.go(-1)
  }
  render () {
    // return <div className="m-box"><div style={{color: '#D82C36'}}>404 Page Not Found !</div></div>
    return (
      <div className="error-panel animated fadeInUp">
        <h1 className="error-code">404</h1>
        <p className="error-description">Page Not Found</p>
        <div className="error-ctrl">
          <Button type="primary" href="/">主页</Button>&nbsp;
          <Button onClick={() => this.handlerBack()}>返回</Button>
        </div>
        <p className="copyright">Make by @lanyue</p>
      </div>
    )
  }
}

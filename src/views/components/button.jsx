import React from 'react'
import {Breadcrumb} from 'antd'
import MButton from '../../components/m-button'

export default class ButtonIndex extends React.Component {
  handleClick (e) {
    console.log('click', e)
  }
  render () {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 16px' }}>
          <Breadcrumb.Item>Components</Breadcrumb.Item>
          <Breadcrumb.Item>MButton</Breadcrumb.Item>
        </Breadcrumb>
        <div className="m-box">
          <div>
            <MButton click={(e) => this.handleClick(e)}>Default</MButton>
            <MButton type="info">Info</MButton>
            <MButton type="primary">Primary</MButton>
            <MButton type="success">Success</MButton>
            <MButton type="danger">Danger</MButton>
            <MButton type="warning">Warning</MButton>
          </div>
          <p></p>
          <div>
            <MButton type="info" round={true}>test</MButton>
            <MButton type="info" plain={true}>test</MButton>
          </div>
        </div>
      </div>
    )
  }
}

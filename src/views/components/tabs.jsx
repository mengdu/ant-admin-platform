import React from 'react'
import {Breadcrumb} from 'antd'
import {MTabs, MTabPanel} from '../../components/m-tabs'

export default class ButtonIndex extends React.Component {
  handleChange (e) {
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
        <MTabs currentTab="2" change={(val) => this.handleChange(val)}>
            <MTabPanel name="1" label="标签1">1111</MTabPanel>
            <MTabPanel name="2" label="标签2">2222</MTabPanel>
            <MTabPanel name="3" label="标签3">3333</MTabPanel>
            <MTabPanel name="4" label="标签4">4444</MTabPanel>
        </MTabs>
        </div>
      </div>
    )
  }
}

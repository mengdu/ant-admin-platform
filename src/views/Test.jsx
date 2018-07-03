import React from 'react'
import {Breadcrumb} from 'antd'
const MButton = () => import('@/components/m-button')
window.MButton = MButton

export default class Test extends React.Component {
  state = {
    text: 'this is a test',
    obj: {
      b: 1
    },
    button: () => <div>loading...</div>
  }
  componentDidMount () {
    window.test = this
    MButton().then(res => {
      console.log(res)
      this.setState({
        button: res.default
      })
    })
  }
  render () {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 16px' }}>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
        </Breadcrumb>
        <div className="m-box">
          <pre>{JSON.stringify(this.state.obj)}</pre>
          <div><this.state.button>Button</this.state.button></div>
        </div>
      </div>
    )
  }
}

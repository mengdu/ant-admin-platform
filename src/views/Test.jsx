import React from 'react'
import {Breadcrumb} from 'antd'
const store = React.createContext({
  info: 'this is a test.'
})
window.store = store


function TestComponent (props) {
  console.log(props)
  return (
    <div>
      {JSON.stringify(props.data.list)}
    </div>
  )
}

export default class Test extends React.Component {
  state = {
    text: 'this is a test',
    obj: {
      b: 1
    }
  }
  data = {
    list: [{}]
  }
  render () {
    // console.log(this)
    return (
      <store.Provider value={this.data}>
      <div>
        <Breadcrumb style={{ margin: '16px 16px' }}>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
        </Breadcrumb>
        <div className="m-box">
        <store.Consumer>
          {data => <TestComponent {...this.props} data={data} />}
        </store.Consumer>
        </div>
      </div>
      </store.Provider>
    )
  }
}

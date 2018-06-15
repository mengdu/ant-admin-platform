import React from 'react'
import {Button, Breadcrumb} from 'antd'
import {connect} from 'react-redux'

class ReduxDemo extends React.Component {
  handleAdd () {
    this.props.dispatch({type: 'ADD_TODO', val: 1})
  }
  handleReduce () {
    this.props.dispatch({type: 'REDUCE_TODO', val: 1})
  }
  render () {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 16px' }}>
          <Breadcrumb.Item>Pages</Breadcrumb.Item>
          <Breadcrumb.Item>reduce-demo</Breadcrumb.Item>
        </Breadcrumb>
        <div className="m-box">
          <h1 className="text-center">{this.props.counter.count}</h1>
          <div className="text-center">
            <Button type="primary" onClick={() => this.handleAdd()} >Add</Button>&nbsp;&nbsp;
            <Button onClick={() => this.handleReduce()}>Reduce</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    counter: state.counter
  }
})(ReduxDemo)

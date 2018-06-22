import React from 'react'
import {Breadcrumb} from 'antd'

class MInput extends React.Component {
  handleChange (e) {
    this.props.onChange(e)
  }
  render () {
    return (
      <input className="form-control" value={this.props.value} onChange={(val) => this.handleChange(val)} palceholder={this.props.palceholder}/>
    )
  }
}

export default class Test extends React.Component {
  state = {
    text: 'this is a test',
    type: 1
  }
  model (name) {
    return {
      value: this.state[name],
      onChange: (e) => {
        this.setState({
          [name]: e.target.value
        })
      }
    }
  }
  render () {
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 16px' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>双向绑定例子</Breadcrumb.Item>
        </Breadcrumb>
        <div className="m-box">
          <pre>state:{JSON.stringify(this.state)}</pre>
          <MInput {...this.model('text')} val={this.state.text} palceholder="Input" />&nbsp;
          <MInput {...this.model('text')} palceholder="Input" />&nbsp;
          <input className="form-control" {...this.model('text')} />&nbsp;
          <textarea className="form-control" {...this.model('text')}></textarea>
          <p></p>
          <select {...this.model('type')} className="form-control">
            <option value="0">测试</option>
            <option value="1">正式</option>
            <option value="2">遗弃</option>
          </select>
        </div>
      </div>
    )
  }
}

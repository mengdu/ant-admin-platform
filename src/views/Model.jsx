import React from 'react'
import {Breadcrumb} from 'antd'

class MInput extends React.Component {
  handleChange (e) {
    this.props.onChange(e)
  }
  render () {
    return (
      <input className="form-control" value={this.props.value} onChange={(e) => this.handleChange(e)} palceholder={this.props.palceholder}/>
    )
  }
}

export default class Test extends React.Component {
  state = {
    text: 'this is a test',
    checked: true,
    type: 1,
    obj: {b: 1, c: {e: 2, info: 'successful'}}
  }
  // model (name) {
  //   return {
  //     value: this.state[name],
  //     onChange: (e) => {
  //       this.setState({
  //         [name]: e.target.value
  //       })
  //     }
  //   }
  // }
  componentWillMount () {
    window.test = this
  }
  handleChange (val) {
    console.log('change:', val)
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
          </select>&nbsp;
          <MInput {...this.model('obj.c.info')} palceholder="Input" />&nbsp;&nbsp;
          <label><input type="checkbox" {...this.model('checked', {field: 'checked', onChange: (val) => this.handleChange(val)})} />checkbox</label>&nbsp;
          {/*<input type="checkbox" checked={this.state.checked} />&nbsp;*/}
        </div>
      </div>
    )
  }
}

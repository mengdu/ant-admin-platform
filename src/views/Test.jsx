import React from 'react'
// import QueueAnim from 'rc-queue-anim'
// import {MTabs, MTabPanel} from '../components/m-tabs'

class MInput extends React.Component {
  handleChange (e) {
    console.log('change', e.target.value)
    // this.props.input(e.target.value)
    this.props.onChange(e)
  }
  render () {
    return (
      <input value={this.props.value} onChange={(val) => this.handleChange(val)} palceholder={this.props.palceholder}/>
    )
  }
}

export default class Test extends React.Component {
  state = {
    text: 'this is a test'
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
        <p style={{padding: '10px 15px'}}>this is a test page.</p>
        {/*<QueueAnim >
            <h1 key="1">h1</h1>
            <h1 key="2">h1</h1>
            <h1 key="3">h1</h1>
            <h1 key="4">h1</h1>
            <h1 key="5">h1</h1>
            <h1 key="6">h1</h1>
        </QueueAnim>*/}
        {/*<MTabs currentTab="2" change={(val) => this.handleChange(val)}>
          <MTabPanel name="1" label="标签1">1111</MTabPanel>
          <MTabPanel name="2" label="标签2">2222</MTabPanel>
          <MTabPanel name="3" label="标签3">3333</MTabPanel>
          <MTabPanel name="4" label="标签4">4444</MTabPanel>
        </MTabs>*/}
        <pre>{JSON.stringify(this.state)}</pre>
        <MInput {...this.model('text')} val={this.state.text} palceholder="Input" />&nbsp;
        <MInput {...this.model('text')} palceholder="Input" />&nbsp;
        <input {...this.model('text')} />&nbsp;
        <textarea {...this.model('text')}></textarea>
      </div>
    )
  }
}

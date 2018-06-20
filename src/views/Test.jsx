import React from 'react'
// import QueueAnim from 'rc-queue-anim'
import {MTabs, MTabPanel} from '../components/m-tabs'

export default class Test extends React.Component {
  handleChange (name) {
    console.log('change', name)
  }
  render () {
    return (
      <div>
        {/*<QueueAnim >
            <h1 key="1">h1</h1>
            <h1 key="2">h1</h1>
            <h1 key="3">h1</h1>
            <h1 key="4">h1</h1>
            <h1 key="5">h1</h1>
            <h1 key="6">h1</h1>
        </QueueAnim>*/}
        <MTabs currentTab="2" change={(val) => this.handleChange(val)}>
          <MTabPanel name="1" label="标签1">1111</MTabPanel>
          <MTabPanel name="2" label="标签2">2222</MTabPanel>
          <MTabPanel name="3" label="标签3">3333</MTabPanel>
          <MTabPanel name="4" label="标签4">4444</MTabPanel>
          <p>pppp</p>
        </MTabs>
        
      </div>
    )
  }
}

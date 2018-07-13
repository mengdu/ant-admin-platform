import React from 'react'
import {Breadcrumb} from 'antd'
// import {TransitionGroup, CSSTransition} from 'react-transition-group'
import QueueAnim from 'rc-queue-anim'

function Show (props) {
  if (props.if) {
    return props.children
  }
  return null
}
export default class Test extends React.Component {
  state = {
    tag: 'test',
    show: false
  }
  render () {
    // console.log(this)
    return (
      <div>
        <Breadcrumb style={{ margin: '16px 16px' }}>
          <Breadcrumb.Item>Test</Breadcrumb.Item>
        </Breadcrumb>
        <div className="m-box">
        <p>
          <input type="checkbox" {...this.model('show', {field: 'checked'})} />
        </p>
        
        {/* <TransitionGroup> */}
          {/* <CSSTransition in={this.state.show} classNames="fade" timeout={500}} > */}
          <QueueAnim>
            <div key="1">enter in queue</div>
            <div key="2">enter in queue</div>
            <div key="3">enter in queue</div>
            {this.state.show && (<div key="a" style={{width: '400px', height: '200px', background: '#ccc'}}></div>)}
          </QueueAnim>
          {/* </CSSTransition> */}
        {/* </TransitionGroup> */}
        
        </div>
      </div>

    )
  }
}

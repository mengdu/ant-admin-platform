import React from 'react'

export default class Test extends React.Component {
  state = {
    text: 'this is a test',
    obj: {
      b: 1
    }
  }
  componentDidMount () {
    window.test = this
  }
  render () {
    return (
      <div className="m-box">
        <pre>{JSON.stringify(this.state.obj)}</pre>
      </div>
    )
  }
}

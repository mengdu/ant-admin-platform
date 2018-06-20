import React from 'react'

export default class MTabPanel extends React.Component {
  render () {
    return (
      <React.Fragment>{this.props.children}</React.Fragment>
    )
  }
}

import React from 'react'

export default class MTabs extends React.Component {
  state = {}
  handleSelect (e, tab) {
    this.setState({
      currentTab: tab.name
    })
    this.props.change && this.props.change(tab.name)
  }
  componentWillMount () {
    // console.log(this.props.children)
    let tabs = this.props.children.filter(child => {
      return child.type.name === 'MTabPanel'
    })
    this.setState({
      tabs,
      currentTab: this.props.currentTab
    })
  }
  render () {
    let currentTab = this.state.tabs.filter(tab => {
      return tab.props.name === this.state.currentTab
    })
    let navs = this.state.tabs.map(tab => {
      let {name, label} = tab.props
      let active = name === this.state.currentTab
      return (
        <div className={'m-tabs-tab' + (active ? ' m-tabs-tab-active' : '')}
          key={name}
          onClick={(e) => this.handleSelect(e, {name, label})}
          >
          {label}
        </div>
      )
    })
    return (
      <div className="m-tabs">
        <div className="m-tabs-nav">
          {navs}
        </div>
        <div className="m-tabs-view">
          {currentTab}
        </div>
      </div>
    )
  }
}

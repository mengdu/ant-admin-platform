import React from 'react'
import {Icon, Tag} from 'antd'

export default class AppFooter extends React.Component {

  render () {
    let repository = this.$app.repository.url.replace(/git\+/, '')
    return (
      <div className="text-center">
        <a href={repository} target="_blank" rel="noopener noreferrer"><Icon type="github" />&nbsp;{this.$app.name}</a>  Make by &nbsp;
        <a href={this.$app.authorHome || '#'} >{this.$app.author}</a>&nbsp;
        <span >version: <Tag color="blue">{this.$app.version}</Tag></span>
      </div>
    )
  }
}
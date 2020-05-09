import React, {Component}from 'react'

export default class About extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let {msg} = this.props
    return(
      <div>
        <p className="route">About组件内容</p>
        <p>{msg}</p>
      </div>
    )
  }
}
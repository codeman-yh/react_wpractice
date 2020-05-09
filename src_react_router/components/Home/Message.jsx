import React, {Component}from 'react'
import {Route,NavLink} from 'react-router-dom'
import {Button} from 'antd'

import MessageDetail from './MessageDetail'
export default class Message extends Component {
  state = {
    messageArray: []
  }
  constructor(props){
    super(props)
  }
  componentDidMount () {
    setTimeout(()=>{
      this.setState({
        messageArray: ['message001','message002','message003']
      })
    },2000)
  }
  handleHistory = (action, path) => {
    if (action === 'goBack'){
      this.props.history[action]()
    }else{
      this.props.history[action](path)
    }
  }
  render(){
    return(
      <div className="message-content">
        <ul>
          {
            this.state.messageArray.map((item, index)=>{
              let url = `/home/message/messageDetail/${index+1}`
              return(
              <li key={index}><NavLink className="medetail" to={url}>{item}</NavLink>
              <Button onClick={()=>{this.handleHistory('push', url)}}>push查看</Button>
              <Button onClick={this.handleHistory.bind(this,'replace',url)}>replace查看</Button></li>
              )
            })
          }
        </ul>
{/*         <button>回退</button> */}
        <Button type="primary" onClick={this.handleHistory.bind(this,'goBack')}>回退</Button>
        <br/>
        <br/>
        <Route path='/home/message/messageDetail/:id' component={MessageDetail}></Route>
      </div>
    )
  }
}
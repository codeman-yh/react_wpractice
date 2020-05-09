import React, {Component}from 'react'
import {Route,Switch,NavLink,Redirect} from 'react-router-dom'

import News from './News'
import Message from './Message'
export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return(
      <div className="home-content">
        <div className="home-tab">
        <p className="route">Home组件内容</p>
        <NavLink className="news" to='/home/news'>News</NavLink>
        <NavLink className="message" to='/home/message'>message</NavLink>
        </div>
        <Switch>
          <Route path='/home/news' component={News}></Route>
          <Route path='/home/message' component={Message}></Route>
          <Redirect to='/home/news'></Redirect>
        </Switch>
      </div>
    )
  }
}
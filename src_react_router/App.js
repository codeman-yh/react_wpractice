import React, {Component} from 'react'
import {Route,Switch,NavLink,Redirect} from 'react-router-dom'

import Home from './components/Home/Home'
import About from './components/About'
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="content">
        <h1>React Router Demo</h1>
        <hr/>
        <div className="routeTab">
          <ul> 
            <li><NavLink className="about" to='/about'>About</NavLink></li>
            <li><NavLink className="home" to='/home'>Home</NavLink></li>
          </ul>
            <Switch>
            <Route path='/about' render={(()=><About msg="通过props传递参数"/>)}></Route>
            <Route path='/home' component={Home}></Route>
            <Redirect to='/about'></Redirect>
            </Switch>
         </div>
      </div>
    )
  }
}
import React,{Component} from 'react'

import Header from './container/Header'
import List from './container/List'

import './App.css'

export default class App extends Component {
  state = {
    loading: true,
    userName:''
  }
  constructor(props){
    super(props)
  }
  SearchUserName = (userName) =>{
    this.setState({
      userName
    })
  }
  render() {
    let {userName} = this.state
    return (
      <div>
        <Header SearchUserName={this.SearchUserName}/>
        <List userName={userName}/>
      </div>
    )
  }
}
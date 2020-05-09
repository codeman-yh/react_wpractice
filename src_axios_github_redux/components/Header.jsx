import React,{Component} from 'react'
import PubSub from 'pubsub-js'

export default class App extends Component {
  constructor(props){
    super(props)
  }
  searchName = () =>{
    let userName = this.refs.userName.value
    // PubSub.publish('userName', userName)
    // this.props.SearchUserName(userName)
    this.props.AsyncsendAction(userName)

  }
  render() {
    return (
    <div className= "header">
      <h3>Search Github Users</h3>
      <input type="text" placeholder="enter the name you search" ref="userName"/>
      <button onClick={this.searchName}>Search</button>
    </div>
    )
  }
}
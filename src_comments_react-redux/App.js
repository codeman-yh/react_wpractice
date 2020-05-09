import React , {Component} from 'react'
import './App.css'

import AddCommet from './containers/AddComment'
import CommentList from './containers/CommentList'

export default class App extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>
        <div className="header">
          <h1>请发表对React的评论</h1>
        </div>
        <div className="content">
          <AddCommet />
          <CommentList/>
        </div>
      </div>
    )
  }
}

import React , {Component} from 'react'
import './App.css'

import AddCommet from './components/AddComment'
import CommentList from './components/CommentList'

export default class App extends Component{
  state = {
    comments:[
      {userName:'张三',commentContent:'666'},
      {userName:'李四',commentContent:'fadsfd'},
      {userName:'小明',commentContent:'dfadg'}
    ]
  }
  constructor(props){
    super(props)
  }
  addComment = (comment)=> {
    let {comments} = this.state
    comments.push(comment)
    this.setState({
      comment
    })
  }

  deleteComment = (index)=>{
    let {comments} = this.state
    comments.splice(index,1)
    this.setState({
      comments
    })
  }
  render(){
    return (
      <div>
        <div className="header">
          <h1>请发表对React的评论</h1>
        </div>
        <div className="content">
          <AddCommet addComment={this.addComment}/>
          <CommentList comments={this.state.comments} deleteComment={this.deleteComment} />
        </div>
      </div>
    )
  }
}

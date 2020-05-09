import React,{Component} from 'react'
import '../App.css'

export default class AddCommnet extends Component{
  constructor(props){
    super(props)
  }
  addComment = () => {
    let{addComment} = this.props
    let userName = this.refs.userName.value
    let commentContent = this.refs.commentContent.value
    if(userName.trim() === '' || commentContent.trim() === ''){
      alert('输入不能为空')
      return
    }
    let UserComment = {
      userName,
      commentContent
    }
    addComment(UserComment)
    this.refs.userName.value = ''
    this.refs.commentContent.value = ''
  }
  render(){
    return(
      <div className="content-left">
        <label>用户名</label>
        <input type="text" placeholder="用户名" className="text-input" ref="userName"/>
        <label>评论内容</label>
        <textarea rows="6" placeholder="评论内容" className="text-input" ref="commentContent"></textarea>
        <button onClick= {this.addComment}>提交</button>
      </div>
    )
  }
}
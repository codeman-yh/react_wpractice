import React,{Component} from 'react'
import '../App.css'

export default class CommentItem extends Component{
  constructor(props){
    super(props)
  }
  deleteComment = ()=> {
    let {index,item,deleteComment} = this.props
    alert(`是否要删除 ${item.userName} 的评论`)
    deleteComment(index)
  }
  render(){
    let {item} = this.props
    return(
      /* comments.map((item,index) => {
        return (

          <li key={index}>
            <p className="user">{item.userName}</p>
            <p className="uComment">{item.commentContent}</p>
            <a href="#" onClick={this.deleteComment}>删除</a>
          </li>
        )
      } */
        <li>
          <p className="user">{item.userName}</p>
          <p className="uComment">{item.commentContent}</p>
          <a href="#" onClick={this.deleteComment}>删除</a>
        </li>
    )
  }
}
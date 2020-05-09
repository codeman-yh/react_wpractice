import React,{Component} from 'react'
import '../App.css'

import CommentItem from './CommentItem'
export default class CommentList extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let {comments,deleteComment} = this.props
    let display  = comments.length > 0 ? 'none' : 'block'
    return(
      <div className="content-rigth">
        <h3>评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul>
          {comments.map((item,index)=>{
            return(
             <CommentItem comments={comments} deleteComment={deleteComment}
             item={item} index={index} key={index}/>
            )        
          })}
         
        </ul>
      </div>
    )
  }
}
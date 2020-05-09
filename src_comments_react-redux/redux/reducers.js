import {ADDCOMMENT, DELCOMMENT} from './actions-type'

let initComments =[
  {userName:'张三',commentContent:'666'},
  {userName:'李四',commentContent:'fadsfd'},
  {userName:'小明',commentContent:'dfadg'}
]
export default (state= initComments, action) =>{
  switch (action.type) {
    case ADDCOMMENT:
      let addcomments = [...state]
      addcomments.push(action.data)
      return addcomments
    case DELCOMMENT:
      let Comments = [...state]
      Comments.splice(action.data, 1)
      return Comments
    default :
      return state
  }
}
import {ADDPERSONS} from '../actions-type'

let initState = [
  {name: '张三', age: 18},
  {name: '李四', age: 20}
]
export default (state= initState, action) => {
  switch(action.type) {
    case ADDPERSONS:
      return [...state, action.data]
    default:
      return state
  }
}
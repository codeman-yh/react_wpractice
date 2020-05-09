import { combineReducers } from 'redux'

import {INCREMENT, DECREMENT, CHANGEVALUE} from '../actions-type'

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.data 
    case DECREMENT:
      return state - action.data 
    default: 
    return state
  }
}

const selectValueReducer = (state = 1, action) => {
  if (action.type === CHANGEVALUE) {
    return action.data
  } else {
    return state
  }
}

export default combineReducers({
  count: countReducer,
  selectValue:selectValueReducer
})
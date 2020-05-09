import { combineReducers } from 'redux'

const CountReducer = (state = 0, action) => {
  switch (action.type) {
    case 'increment':
      return state + action.data 
    case 'decrement':
      return state - action.data 
    default: 
    return state
  }
}

const SlectValueReducer = (state = 1, action) => {
  if (action.type === 'changeValue') {
    return action.data
  } else {
    return state
  }
}

const reducers = combineReducers({
  CountReducer,
  SlectValueReducer
})

export default reducers
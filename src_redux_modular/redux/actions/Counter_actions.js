import {INCREMENT, DECREMENT, CHANGEVALUE} from '../actions-type'

// 同步actions
export const incrementAction = (data) => {
  return {
    type: INCREMENT,
    data
  }
}

export const decrementAction = (data) => {
  return {
    type: DECREMENT,
    data
  }
}

export const changeValueAction = (data) => {
  return {
    type: CHANGEVALUE,
    data
  }
}

// 异步actions
export const asyncIncrementAction = (data) => {
  return dispatch => {
    setTimeout(() => {
      dispatch (incrementAction (data))
    }, 2000);
  }
} 
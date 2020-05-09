import {LOADING, ERROR, SUCCESS} from './actions-type'

let initState = {
  firstView: true,
  loading: false,
  resultData: [],
  error: false
}

const StatusReducer = (state= initState, action) => {
  switch(action.type) {
    case LOADING: 
      return {
        firstView: false,
        loading: true,
        resultData: [],
        error: false
      }
    case SUCCESS:
      return {
        firstView: false,
        loading: false,
        resultData: action.data,
        error: false
    }
    case ERROR: 
      return {
        firstView: false,
        loading: false,
        resultData: [],
        error: '暂时没有匹配到用户'
      }
    default:
      return state
  }
}

export default StatusReducer
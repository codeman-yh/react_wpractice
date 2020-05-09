import {LOADING, ERROR, SUCCESS} from './actions-type'
import axios from 'axios'

// 同步action
export const loadingAction = () => {
  return {
    type: LOADING
  }
}

export const successAction = (data) => {
  return {
    type: SUCCESS,
    data
  }
}

export const errorAction = () => {
  return {
    type: ERROR
  }
}


// 异步发送Ajax请求
export const AsyncsendAction = (data) => {
  return async dispatch => {
    let url = `https://api.github.com/search/users?q=${data}`
    dispatch(loadingAction())
    try{
      let result = await axios.get(url)
      let userData = result.data.items.map((item)=>{
        return {
          login: item.login,
          avatar_url: item.avatar_url,
          html_url: item.html_url
        }
      })
    dispatch(successAction(userData))
    } catch(error) {
      dispatch(errorAction())
    }
  }
}
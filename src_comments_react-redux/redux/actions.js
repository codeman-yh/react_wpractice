import {ADDCOMMENT, DELCOMMENT} from './actions-type'

export const addComment = (data) => {
  return {
    type: ADDCOMMENT,
    data
  }
}

export const delComment = (data) => {
  return {
    type: DELCOMMENT,
    data
  }
}
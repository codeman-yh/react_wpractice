import {ADDPERSONS} from '../actions-type'

export const addPersonAction = (data) => {
  return {
    type: ADDPERSONS,
    data
  }
}
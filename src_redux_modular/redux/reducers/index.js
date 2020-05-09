import {combineReducers} from 'redux'

import CounterRducers from './CounterRducers'
import PersonsReducer from './PersonsReducer'

export default combineReducers({
  counter: CounterRducers,
  persons: PersonsReducer
})
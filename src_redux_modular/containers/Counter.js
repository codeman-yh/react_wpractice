import {connect} from 'react-redux'
import {incrementAction, decrementAction, changeValueAction ,asyncIncrementAction} from '../redux/actions/Counter_actions'

import counter from '../components/counter'

export default connect(
  state => ({counter: state.counter, persons: state.persons}),
  {incrementAction,decrementAction,changeValueAction,asyncIncrementAction}
)(counter)
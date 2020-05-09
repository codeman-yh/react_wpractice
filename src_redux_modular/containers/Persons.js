import {connect} from 'react-redux'

import Persons from '../components/persons'
import {addPersonAction} from '../redux/actions/Persons_actions'
export default connect(
  state => ({persons: state.persons}),
  {addPersonAction}
)(Persons)
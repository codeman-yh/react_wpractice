import {connect} from 'react-redux'

import {AsyncsendAction} from '../redux/actions'
import List from '../components/List.jsx'

export default connect(
  state => ({status:state})
)(List)
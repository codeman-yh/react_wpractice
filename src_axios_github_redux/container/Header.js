import {connect} from 'react-redux'

import Header from '../components/Header.jsx'
import {AsyncsendAction} from '../redux/actions'

export default connect(
  state => ({}),
  {AsyncsendAction}
)(Header)
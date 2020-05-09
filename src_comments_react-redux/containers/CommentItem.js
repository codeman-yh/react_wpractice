import {connect} from 'react-redux'

import CommentItem from '../components/commentItem.jsx'
import {delComment} from '../redux/actions'
export default connect(
  state => ({}),
  {delComment}
)(CommentItem)
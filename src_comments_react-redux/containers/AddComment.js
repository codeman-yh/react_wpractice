import {connect} from 'react-redux'

import {addComment} from '../redux/actions'
import AddComment from '../components/addComment.jsx'

export default connect(
  state => ({comments: state}),
  {addComment}
)(AddComment)
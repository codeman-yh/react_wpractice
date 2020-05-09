import {connect} from 'react-redux'

import CommentList from '../components/commentList.jsx'


export default connect(
  state => ({comments: state}),
)(CommentList)
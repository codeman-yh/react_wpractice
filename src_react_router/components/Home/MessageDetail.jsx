import React, {Component} from 'react'

export default class MessageDetail extends Component{
  state = {
    MdArray: [
      {id:1, content:'haha'},
      {id:2, content:'hehe'},
      {id:3, content:'hihi'}
    ]
  }
  constructor(props) {
    super(props)
  }

  render() {
    let {id} = this.props.match.params
    
    let mdobj = this.state.MdArray.find((item, index)=> item.id === id*1)
    return(
      <div>
        <p>id: {mdobj.id}</p>
        <p>content: {mdobj.content}</p>
      </div>
     )
    
  }
}
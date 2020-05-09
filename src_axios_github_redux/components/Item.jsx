import React,{Component} from 'react'


export default class App extends Component {
  constructor(props){
    super(props)
  }

  render() {
    let {login,avatar_url,html_url} = this.props.item
    return (
    <div className= "item">
      <a href={html_url}>
        <img src={avatar_url} alt="1"/>
      </a>
      <p className="desc">{login}</p>
    </div>
    )
  }
}
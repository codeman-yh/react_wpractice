import React,{Component} from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

import Item from './Item'
export default class App extends Component {
  state = {
    firstView: true,
    loading: false,
    resultData: [],
    error: false
  }
  constructor(props){
    super(props)
  }
   componentDidMount () {
    PubSub.subscribe('userName', (msg, data)=>{
      this.setState({
        firstView: false,
        loading: true,
        resultData: []
      })
      let userName = data
      // let userName = nextprops.userName 
      if(userName!==''){
        let url = `https://api.github.com/search/users?q=${userName}`
         axios.get(url)
        .then((response)=>{
          let {resultData} = this.state
          const result = response.data.items
          resultData = result.map((item)=>{
            return {
              login: item.login,
              avatar_url: item.avatar_url,
              html_url: item.html_url
            }
          })
          this.setState({
            resultData,
            loading: false
          })
        }).catch((error)=>{
          this.setState({
            loading: false,
            error: true
          })
        }) 
      } 
    })   
  }
  render() {
    let {firstView,loading,resultData,error} = this.state
    if (firstView) {
      return <p>请在上方输入用户名，随后点击搜索</p>
    } else if (loading) {
      return <p>loading...</p>
    } else if (resultData.length) {
      return (
        <div className= "list">
          {
            resultData.map((item,index)=>{
              return(
                 <Item item={item} key={index}/>
              )
            })
          }
        </div>
        )
    } else {
      return <p>暂时没有匹配到用户，请重新匹配</p>
    }
  }
}
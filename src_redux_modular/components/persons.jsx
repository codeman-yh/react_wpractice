import React, {Component} from 'react'
import {Button, Input} from 'antd'
export default class Persons extends Component {
  constructor(props) {
    super(props)
  }
  add = () =>{
    let {name, age} = this.refs
    let PersonObj = {
      name: name.state.value,
      age: age.state.value
    }
    this.props.addPersonAction(PersonObj)
  }
  render() {
    return(
      <div style={{margin:'0 auto', width: '300px'}}>
        <Input type="text" placeholder="姓名" ref="name"/>
        <Input type="text" placeholder="年龄" ref="age"  maxLength={25}/>
        <ul>
          {
            this.props.persons.map((item,index)=>{
            return <li key={index}>{item.name} {item.age}</li>
            })
          }
        </ul>
        <Button onClick={this.add}>添加</Button>
      </div>
    )
  }
}
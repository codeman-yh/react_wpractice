import React, {Component} from 'react'
import {Button, Select } from 'antd'

import {incrementAction, decrementAction, changeValueAction} from './redux/actions'
const {Option} = Select


export default class App extends Component{
/*   state = {
    Count: 0,
    value: 1
  } */
  constructor(props){
    super(props)
  }
  getValue = (value) => {
    this.props.store.dispatch(changeValueAction(value*1))
    console.log(this.props.store.getState())
  }
  increment = () =>{
    let value = this.props.store.getState().SlectValueReducer
    this.props.store.dispatch(incrementAction(value))
  }
  decrement = () =>{
    let value = this.props.store.getState().SlectValueReducer
    this.props.store.dispatch(decrementAction(value))
  }
  incrementifOdd = () =>{
    let Count = this.props.store.getState().CountReducer
    if (Count % 2 !== 0) {
      this.increment()
    }
  }
  incrementAsync = () =>{
    setTimeout(() => {
      this.increment()
    },1000)
  }
  render() {
    return (
      <div style={{margin:'0 auto',width:'800px'}}>
        <h2>Count: {this.props.store.getState().CountReducer}</h2>
        <Select defaultValue="1" onChange={this.getValue}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
        </Select> &nbsp;&nbsp;
        <Button onClick={this.increment}>+</Button>&nbsp;&nbsp;
        <Button onClick={this.decrement}>-</Button>&nbsp;&nbsp;
        <Button onClick={this.incrementifOdd}>increment ifOdd</Button>&nbsp;&nbsp;
        <Button onClick={this.incrementAsync}>increment async</Button>
      </div>
    )
  }
} 
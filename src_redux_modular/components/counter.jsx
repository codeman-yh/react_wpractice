import React, {Component} from 'react'
import {Button, Select } from 'antd'

// import {incrementAction, decrementAction, changeValueAction} from '../redux/actions'
const {Option} = Select


export default class Counter extends Component{

  constructor(props){
    super(props)
  }
  getValue = (value) => {
   // this.props.store.dispatch(changeValueAction(value*1))
    //console.log(this.props.store.getState())
    this.props.changeValueAction(value*1)
  }
  increment = () =>{
    let value = this.props.counter.selectValue
    //this.props.store.dispatch(incrementAction(value))
    this.props.incrementAction(value)
  }
  decrement = () =>{
    let value = this.props.counter.selectValue
   // this.props.store.dispatch(decrementAction(value))
   this.props.decrementAction(value)
  }
  incrementifOdd = () =>{
    //let Count = this.props.store.getState().CountReducer
   /*  if (Count % 2 !== 0) {
      this.increment()
    } */
    let {count} = this.props.counter
    if (count % 2 !== 0) {
      this.increment()
    }
  }
  incrementAsync = () =>{
    let value = this.props.counter.selectValue
    this.props.asyncIncrementAction(value)
  }
  render() {
    return (
      <div style={{margin:'0 auto',width:'800px'}}>
        <h2>Count: {this.props.counter.count}</h2>
        <h2>person组件中的人数：{this.props.persons.length} </h2>
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
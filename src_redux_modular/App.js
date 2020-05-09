import React, {Component} from 'react'

import Counter from './containers/Counter'
import Persons from './containers/Persons'
export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Counter />
        <hr/>
        <Persons />
      </div>
    )
  }
}
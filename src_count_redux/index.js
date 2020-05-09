import React from 'react'
import ReactDOM from 'react-dom'

import store from './redux/store'

import App from './App'

store.subscribe(
 () => ReactDOM.render(<App  store={store}/>, document.querySelector('#root'))  
)

ReactDOM.render(<App  store={store}/>, document.querySelector('#root'))

import React from 'react'
import { connect } from 'react-redux'

import InsertTodo from '../components/InsertTodo'
import Todos from '../components/Todos'

const Home = props => {
  props.dispatch({
    type: 'GET_TODOS'
  })

  return (
    <div>
      <h1>Todoapp</h1>
      <InsertTodo />
      <Todos />
    </div>
  )
}

export default connect()(Home)

import React from 'react'

import { request } from '../helpers'

import InsertTodo from '../components/InsertTodo'
import Todos from '../components/Todos'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  setTodos = async () => {
    // request is axios instance
    // you can also use XHR object / fetch()
    const response = await request({
      method: 'get',
      url: '/todos'
    })
    this.setState({
      todos: response.data.todos
    })
  }

  render() {
    return (
      <div>
        <h1>Todoapp</h1>
        {/* pass this.setTodos function to setTodos props */}
        <InsertTodo setTodos={this.setTodos} />
        <Todos />
      </div>
    )
  }

  componentDidMount = async () => {
    this.setTodos()
  }
}

export default Home

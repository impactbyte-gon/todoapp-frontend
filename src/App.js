import React from 'react'

import { request } from './helpers'

import InsertTodo from './components/InsertTodo'
import Todos from './components/Todos'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  // using fetch
  // componentDidMount = async () => {
  //   const response = await fetch('http://localhost:8000/todos')
  //   const responseJSON = await response.json()
  //   this.setState({
  //     todos: responseJSON.data
  //   })
  // }

  // using axios
  componentDidMount = async () => {
    this.setTodos()
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
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App

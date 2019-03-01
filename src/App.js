import React from 'react'
import axios from 'axios'

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
    const response = await axios.get('http://localhost:8000/todos')

    this.setState({
      todos: response.data.todos
    })
  }

  render() {
    return (
      <div>
        <h1>Todoapp</h1>
        <InsertTodo />

        <Todos todos={this.state.todos} />
      </div>
    )
  }
}

export default App

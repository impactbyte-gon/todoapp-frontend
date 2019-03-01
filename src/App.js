import React from 'react'

import InsertTodo from './components/InsertTodo'
import Todos from './components/Todos'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:8000/todos')
    const responseJSON = await response.json()

    this.setState({
      todos: responseJSON.data
    })
  }

  render() {
    console.log(this.state.todos)

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

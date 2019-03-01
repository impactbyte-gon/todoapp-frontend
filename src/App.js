import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:8000/todos')
    const responseJSON = await response.json()

    // long version
    this.setState(() => {
      return {
        todos: responseJSON.data
      }
    })

    // short version
    // this.setState({
    //   todos: responseJSON
    // })
  }

  render() {
    return (
      <div>
        <h1>Todoapp</h1>
        <ul>
          {/* using short circuit operator */}
          {this.state.todos &&
            this.state.todos.map((item, index) => {
              return <li key={index}>{item.text}</li>
            })}

          {/* using ternary operator */}
          {/* {this.state.todos ? (
            this.state.todos.map((item, index) => {
              return <li key={index}>{item.text}</li>
            })
          ) : (
            <li>todos are not available</li>
          )} */}
        </ul>
      </div>
    )
  }
}

export default App

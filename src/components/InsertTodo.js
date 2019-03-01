import React from 'react'

import { request } from '../helpers'

class InsertTodo extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  onChange = event => {
    const textInput = event.target.value

    if (textInput) {
      this.setState({
        text: textInput
      })
    }
  }

  postTodos = async () => {
    await request({
      method: 'post',
      url: '/todos',
      data: {
        text: this.state.text
      }
    })
  }

  onSubmit = async () => {
    // POST new todo into the backend
    this.postTodos()
    // GET latest todos from the backend
    this.props.setTodos()
  }

  render() {
    return (
      <form
        onSubmit={event => {
          event.preventDefault()
          this.onSubmit()
        }}
      >
        <input
          onChange={this.onChange}
          type="text"
          placeholder="your todo here..."
        />
        <input type="submit" value="Insert" />
      </form>
    )
  }
}

export default InsertTodo

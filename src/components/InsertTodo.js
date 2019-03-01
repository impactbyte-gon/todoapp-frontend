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

  clearInputText = () => {
    this.setState({
      text: ''
    })
  }

  onSubmit = async () => {
    // POST new todo into the backend
    await this.postTodos()
    // GET latest todos from the backend
    await this.props.setTodos()
    // Clear the input text
    this.clearInputText()
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
          value={this.state.text}
        />
        <input type="submit" value="Insert" />
      </form>
    )
  }
}

export default InsertTodo

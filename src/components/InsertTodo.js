import React from 'react'
import { connect } from 'react-redux'

// import { request } from '../helpers'

class InsertTodo extends React.Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  onChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  clearInputText = () => {
    this.setState({
      text: ''
    })
  }

  onSubmit = async () => {
    // POST new todo into the backend
    // from Redux mapDispatchToProps
    if (this.state.text) {
      this.props.dispatch({
        type: 'INSERT_NEW_TODO',
        payload: {
          text: this.state.text
        }
      })
    }

    // GET latest todos from the backend
    // from Redux mapDispatchToProps
    // await this.props.getTodos()

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

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  // mapDispatchToProps,
  mapStateToProps
)(InsertTodo)

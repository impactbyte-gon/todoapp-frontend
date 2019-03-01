import React from 'react'

class InsertTodo extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="your todo here..." />
        <input type="submit" value="Insert" />
      </form>
    )
  }
}

export default InsertTodo

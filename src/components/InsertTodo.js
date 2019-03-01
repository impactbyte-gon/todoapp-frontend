import React from 'react'

class InsertTodo extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="your todo here..." />
        <input type="submit" value="Create" />
      </form>
    )
  }
}

export default InsertTodo

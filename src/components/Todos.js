import React from 'react'
import { connect } from 'react-redux'

const Todos = props => {
  return (
    <ul>
      {props.data &&
        props.data.map((item, index) => {
          return <li key={index}>{item.text}</li>
        })}
    </ul>
  )
}

// get state inside the store
// make it as props
const mapStateToProps = state => {
  return {
    data: state.todosReducer.todos
  }
}

export default connect(mapStateToProps)(Todos)

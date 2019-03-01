import React from 'react'

const Todos = props => {
  return (
    <ul>
      {props.todos &&
        props.todos.map((item, index) => {
          return <li key={index}>{item.text}</li>
        })}
    </ul>
  )
}

export default Todos

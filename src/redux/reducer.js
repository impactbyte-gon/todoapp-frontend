import { combineReducers } from 'redux'

import { request } from '../helpers'

const todosInitialState = [
  {
    text: 'Learning'
  }
]

// reducer is not a promise
// reducer is alwyas synchronous, cannot be asynchronous
const todosReducer = (state = todosInitialState, action) => {
  switch (action.type) {
    // Example of a case
    // case 'EXAMPLE': {
    //   const payload = {
    //     text: 'New todo text'
    //   }
    //   const action = {
    //     type: 'SET_TODOS',
    //     payload: payload
    //   }
    //   return state
    // }

    case 'INSERT_NEW_TODO': {
      return {
        todos: state.todos.concat({
          text: action.payload.text
        })
      }
    }

    case 'GET_TODOS': {
      return {
        todos: state
      }
    }

    default: {
      return state
    }
  }
}

// combining all reducers
const rootReducer = combineReducers({
  todosReducer
})

export default rootReducer

// we use thunk because reducer cannot be asynchronous
// thunk is a function that return another function
// the function is used to delay the evaluation/calculation of an operation
// it's similar to higher order function/component

// const functionOne = paramOne => {
//   const functionTwo = paramTwo => {
//     return 'resultFromTwo'
//   }
//   return functionTwo
// }

import { request } from '../helpers'

const initialState = {
  todos: []
}

// reducer is not a promise
const reducer = (state = initialState, action) => {
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
      // do request to backend here
      // slow process
      const response = request({
        method: 'get',
        url: '/todos'
      })
      console.log(response.data)

      return {
        todos: response.data
      }
    }

    default: {
      return state
    }
  }
}

export default reducer

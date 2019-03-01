const initialState = {
  todos: [
    {
      text: 'Running'
    },
    {
      text: 'Swimming'
    },
    {
      text: 'Jumping'
    }
  ]
}

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

      return {
        todos: state.todos
      }
    }

    default: {
      return state
    }
  }
}

export default reducer

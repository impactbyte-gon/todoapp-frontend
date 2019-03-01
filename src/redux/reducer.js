const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SAMPLE': {
      return {
        todos: []
      }
    }
    default: {
      return state
    }
  }
}

export default reducer

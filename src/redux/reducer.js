const initialState = {
  todos: [
    {
      id: 1,
      text: 'Running'
    },
    {
      id: 2,
      text: 'Swimming'
    },
    {
      id: 3,
      text: 'Jumping'
    }
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state
    }
  }
}

export default reducer

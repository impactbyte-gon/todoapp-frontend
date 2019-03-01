import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Home from './pages/Home'

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

const reduxStore = createStore(
  reducer,
  // Add Redux DevTools Extension
  // https://github.com/zalmoxisus/redux-devtools-extension#11-basic-store
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const App = () => {
  return (
    <Provider store={reduxStore}>
      <Home />
    </Provider>
  )
}

export default App

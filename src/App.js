import React from 'react'
import { Provider } from 'react-redux'

import Home from './pages/Home'

import reduxStore from './redux/store'

const App = () => {
  return (
    <Provider store={reduxStore}>
      <Home />
    </Provider>
  )
}

export default App

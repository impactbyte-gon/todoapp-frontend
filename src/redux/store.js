import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducer from './reducer'

const reduxStore = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default reduxStore

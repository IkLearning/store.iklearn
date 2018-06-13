import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import promiseMiddleware from 'redux-promise'
import rootReducer from '../reducers/index'

const store = createStore(
    rootReducer,
    composeWithDevTools( applyMiddleware(promiseMiddleware))
)

export default store

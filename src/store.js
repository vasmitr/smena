import {createStore, compose, applyMiddleware} from 'redux'
import rootReducer from 'reducers'
import {api} from 'middlewares'

console.log(api)
export default (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(api), //
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
  )

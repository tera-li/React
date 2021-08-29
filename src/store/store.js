import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './module/reducer'
export default createStore(reducer, applyMiddleware(thunk))
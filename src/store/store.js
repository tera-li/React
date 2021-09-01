import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { countReducer } from './reducer/count'
import { receiveReducer } from './reducer/receive'
const reducers = combineReducers({
    sendNumber: countReducer,
    receiveNumber: receiveReducer
})
export default createStore(reducers, applyMiddleware(thunk))
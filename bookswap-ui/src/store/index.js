import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer'
import websocketReducer from './websocketReducer'

const reducers = combineReducers({
    userReducer,
    websocketReducer
})

const store = createStore(reducers)

export default store
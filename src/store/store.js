import {combineReducers, createStore, applyMiddleware} from 'redux';
import {appReducer} from './appReducer';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
    app: appReducer
})

export let store = createStore(reducers, applyMiddleware(thunkMiddleWare))
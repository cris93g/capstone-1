import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import promiseMiddleWare from 'redux-promise-middleware';
import itemsReducer from './ducks/itemReducer'
import userReducer from './ducks/userReducer'
const middleware = applyMiddleware(promiseMiddleWare);

const combinedReducers = combineReducers({
    itemsReducer,
    userReducer
});

// const store = createStore(combinedReducers, middleware);
const store = createStore(combinedReducers, applyMiddleware(thunk));
export default store;

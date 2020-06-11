import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import itemsReducer from './ducks/itemReducer';
import userReducer from './ducks/userReducer';
//combine our reducers into a big obj
const combinedReducers = combineReducers({
	itemsReducer,
	userReducer
});

const store = createStore(combinedReducers, applyMiddleware(thunk));
export default store;

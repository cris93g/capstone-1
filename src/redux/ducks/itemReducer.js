import axios from 'axios';

const SET_ITEMS = 'SET_ITEMS';
const ADD_ITEM = 'ADD_ITEM';
const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const USER_ITEMS = 'USER_ITEMS';
const DELETE_ITEM = 'DELETE_ITEM';
const CLEAR_CART= 'CLEAR_CART';
const setAddItem = (payload) => ({ type: ADD_ITEM, payload });

export const addItem = (item_name, item_desc, item_price, item_category, item_pic, user_id,item_quantity) => {
	return (dispatch) => {
		axios
			.post(`/api/new-item`, {
				item_name,
				item_desc,
				item_price,
				item_category,
				item_pic,
        user_id,
        item_quantity
			})
			.then((response) => dispatch(setAddItem(response.data)));
	};
};

const setRemoveFromCart = (payload) => ({ type: REMOVE_FROM_CART, payload });
export const removeFromCart = (id) => {
	return (dispatch) => {
		axios.post(`/api/recart`, {id}).then((response) => dispatch(setRemoveFromCart(response.data)));
	};
};

const setAddToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const addToCart = (item) => {
	return (dispatch) => {
		axios.post(`/api/cart`, item).then((response) => dispatch(setAddToCart(response.data)));
	};
};

const setCart = (payload) => ({ type: GET_CART, payload });
export const getCart = () => {
	return (dispatch) => {
		axios.get(`/api/cart`).then((response) => dispatch(setCart(response.data)));
	};
};

const setClearCart = (payload)=>({type:CLEAR_CART,payload});
export const clearCart = ()=>{
	return(dispatch)=>{
		axios.get(`/api/clearcart`).then((response)=>dispatch(setClearCart(response.data)))
	}
}

const setItems = (payload) => ({ type: SET_ITEMS, payload });
export const fetchItem = () => {
	return (dispatch) => {
		axios.get('/api/items').then((response) => dispatch(setItems(response.data))).catch((error) => console.log);
	};
};

const setDeleteItem = (payload) => ({ type: DELETE_ITEM, payload });
export const deleteItem = (item_id) => {
	console.log(item_id);
	return (dispatch) => {
		axios.post(`/api/deleteItem`, { item_id }).then((response) => dispatch(setDeleteItem(response.data)));
	};
};

const setUserItem = (payload) => ({ type: USER_ITEMS, payload });
export const getUserItems = (user_id) => {
	return (dispatch) => {
		axios.post(`/api/useritems`, { user_id }).then((response) => dispatch(setUserItem(response.data)));
	};
};

const initialState = {
	items: [],
	cart: []
};

export default function itemReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_ITEMS':
			return {
				...state,
				items: action.payload
			};
		case 'ADD_ITEM':
			return {
				...state,
				items: action.payload
			};
		case `${ADD_TO_CART}`:
			return {
				...state,
				cart: action.payload
			};
		case `${REMOVE_FROM_CART}`:
			return {
				...state,
				cart: action.payload
			};
		case `${GET_CART}`:
			return {
				...state,
				cart: action.payload
			};
		case `${ADD_ITEM}`:
			return {
				...state,
				items: action.payload
			};
		case `${USER_ITEMS}`:
			return {
				...state,
				items: action.payload
			};
		case `${DELETE_ITEM}`:
			return {
				...state,
				items: action.payload
			};
		default:
			return state;
	}
}

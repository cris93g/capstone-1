import axios from 'axios';

const GET_USER = 'GET_USER';
const LOG_OUT = 'LOG_OUT';

const setUser = (payload)=>(
	{type:GET_USER,payload}
)
export const getUser= ()=>{
	return dispatch =>{
		axios.get('/me').then(response=> dispatch(setUser(response.data)))
	}
}



const setLogout = (payload)=>(
	{type:LOG_OUT,payload}
)

export const logOut = ()=>{
	return dispatch =>{
		axios.get('/logout').then(response=> dispatch(setLogout(response)))
	}
}



const initialState = {
	user: []

};





export default function userReducer(state = initialState, action) {
console.log(initialState,action)
	switch (action.type) {
		case `${GET_USER}`:
			console.log(state)
			return {
			
				...state,
				user: action.payload
			};
		default:
			return state;
	}
}
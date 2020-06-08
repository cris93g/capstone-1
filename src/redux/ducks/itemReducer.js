import axios from 'axios'

const SET_ITEMS = 'SET_ITEMS';
const ADD_ITEM = 'ADD_ITEM';
const GET_CART = 'GET_CART';
const ADD_TO_CART = 'ADD_TO_CART';


// export function getCart() {
//   return {
//     type: GET_CART,
//     payload: axios.get('/api/cart')
//   };
// }



const setAddToCart= payload=>(
  {type:ADD_TO_CART,payload}
)
export const addToCart=(item)=>{
 return dispatch=>{ axios.post(`/api/cart`,item).then(response=> dispatch(setAddToCart(response.data)))
}}

const setCart = (payload) => (
  { type: GET_CART, payload }
)
export const getCart = () => {
  return dispatch => {
    axios.get(`/api/cart`).then(response => dispatch(setCart(response.data)))
  }
}


const setItems = (payload)=>(
  {type:SET_ITEMS,payload}
  )
export const fetchItem = ()=>{
return dispatch =>{
axios.get("/api/items").then(response=> 
dispatch(setItems(response.data))).catch(error=>console.log)
  }
}



const setAddedItems = (payload)=>({
  type:ADD_ITEM,payload
})

// export const addItem = ()=>{
//   return dispatch =>{
//     axios.post(`/api/new-item`,{

//     })
//   }
// }

  const initialState = {
    items: [],
    cart: []
  };

export default function itemReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ITEMS":
      return {
        ...state,
        items: action.payload
      };
      case "ADD_ITEM":
        return {
          ...state,
          items: action.payload
        };
    case `${ADD_TO_CART}`:
      return {
        ...state,
        cart: action.payload
      };
    case `${GET_CART}`:
      return {
        ...state,
        cart: action.payload
      };
    default:
      return state;
  }
}
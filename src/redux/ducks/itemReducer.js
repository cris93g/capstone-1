import axios from 'axios'

const SET_ITEMS = 'SET_ITEMS';
const ADD_ITEM = 'ADD_ITEM';

const setItems = (payload)=>(
  {type:SET_ITEMS,payload}
  )



export const fetchItem = ()=>{
return dispatch =>{
axios.get("/api/items").then(response=> 
dispatch(setItems(response.data))).catch(error=>console.log)
  }
}




  const initialState = {
    items: []
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
    default:
      return state;
  }
}
import React,{useEffect,useState} from 'react'
import { useParams, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from '../../Components/Nav/Nav'
const Item = ()=>{
    const [items,setItems]=useState([])
  let {id} =useParams()
  useEffect(() => {
    axios.post(`/api/item`, {
        item_id: id
    }).then(results=>{
        setItems(results.data)
    })
  }, [])

  console.log(items)
    return(
        <div>
            <Nav/>
        <div>
        {items ? items.map(item=>{
            return(
                <div>
                    <img src={item.item_pic}/>
                </div>
            )
        }):''}</div></div>
    )
}

export default Item
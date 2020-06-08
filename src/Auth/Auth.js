import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {getUser} from '../redux/ducks/userReducer'
const Auth = ()=>{
    const user= useSelector((state)=>state.userReducer.user)
    const dispatch= useDispatch();
    useEffect(()=>dispatch(getUser()),{})
   
    console.log(user)
    return(
        <div>
           <img style={{width:'50px',height:'50px',borderRadius:'25px'}}src={user.user_pic}/>
     <p>{user.user_name}</p>
        </div>
    )
}

export default Auth;
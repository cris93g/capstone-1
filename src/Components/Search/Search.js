import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Input, Button } from 'semantic-ui-react';
const Search = () => {
	// const [pro,setPro]=useState([])
	// const [searArray,setSearArray]=useState([])
	const [ input, setInput ] = useState('');
	// useEffect(()=>{
	//     axios.get(`/api/items`).then(results=>{
	//         setPro(results.data)
	//     })
	// },[])

	// let search =(namekey,arr)=>{
	//     let empty=[];
	//     for(let i=0;i<arr.length;i++){
	//         if(arr[i].item_name.toLowerCase().includes(namekey.toLowerCase())){
	//             console.log(arr[i])
	//             empty.push(arr[i])
	//             setSearArray([...empty])
	//         }
	//     }
	// }
	let onChangeHandler = (e) => {
		setInput(e.target.value);
	};
	// console.log(searArray)
	// let onSubmit = ()=>{
	//     search(input,pro)
	// }
	return (
		<div>
			<Input style={{ marginLeft: '100px' }} onChange={(e) => onChangeHandler(e)} placeholder="search items" />
			<Link to={`/search/${input}`}>
				{' '}
				<Button content="search" />
			</Link>
		</div>
	);
};
export default Search;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector, useCallback } from 'react-redux';
import { Card, Icon, Image, CardContent } from 'semantic-ui-react';
import '../../Screens/Main/Main.scss';
import Nav from '../../Components/Nav/Nav';
import { addToCart } from '../../redux/ducks/itemReducer';
const SearchResults = () => {
	const [ items, setItems ] = useState([]);
	const [ filted, setFiltered ] = useState([]);
	const dispatch = useDispatch();
	let { id } = useParams();
	useEffect(() => {
		axios.get(`/api/items`).then((results) => {
			setItems(results.data);
		});
	}, []);
	// let search =(namekey,arr)=>{
	//     let empty=[];
	//     for(let i=0;i<items.length;i++){
	//         if(arr[i].item_name.toLowerCase().includes(namekey.toLowerCase())){
	//             empty.push(arr[i])
	//             setFiltered([...empty])
	//         }
	//     }
	// }

	let display = items
		? items.map((item) => {
				if (item.item_name.toLowerCase().includes(id)) {
					return (
						<Card>
							<Image src={item.item_pic} wrapped ui={false} />
							<Card.Content>
								<Card.Header>{item.item_name}</Card.Header>
								<Card.Meta>
									<span className="date">{item.item_category}</span>
								</Card.Meta>
								<Card.Description>{item.item_desc}</Card.Description>
							</Card.Content>
							<Card.Content extra style={{ display: 'flex', justifyContent: 'space-around' }}>
								<Link to={`/item/${item.item_id}`}>
									<a>{item.item_price}</a>
								</Link>
								<Link to="/cart">
									<div onClick={() => dispatch(addToCart(item))}>Add to cart</div>
								</Link>
							</Card.Content>
						</Card>
					);
				}
			})
		: '';

	return (
		<div>
			<Nav />
			<div className="outerWrapper">
				<div className="cardWrapper">{display}</div>
			</div>
		</div>
	);
};

export default SearchResults;

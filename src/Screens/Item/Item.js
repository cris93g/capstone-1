import React, { useEffect, useState } from 'react';
import { useParams, Route } from 'react-router-dom';
import axios from 'axios';
import Nav from '../../Components/Nav/Nav';
import './Item.scss';
import { useDispatch} from 'react-redux';
import {addToCart } from '../../redux/ducks/itemReducer';
import {Link} from 'react-router-dom'
import Featured from '../../Components/Featured/Featured';
const Item = () => {
	const [ items, setItems ] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		axios
			.post(`/api/item`, {
				item_id: id
			})
			.then((results) => {
				setItems(results.data);
			});
	}, []);
	const dispatch = useDispatch();
	console.log(items);
	return (
		<div>
			<Nav />
			<div className="itemWrapper">
				<div>
					{items ? (
						items.map((item) => {
							return (
								<div style={{ display: 'flex' }}>
									<div>
										<img src={item.item_pic} className="leftSide" />
									</div>
									<div className="rightSide">
										<div className="infoWrapper">
											<p>{item.item_name}</p>
											<p>{item.item_desc}</p>
							<p>{`sku# ${item.item_sku}`}</p>
											<p>{item.item_price}</p>
											<Link to='/cart'>	<div className="cartB" onClick={() => dispatch(addToCart(item))}>ADD TO CART</div></Link>
										</div>
									</div>
								</div>
							);
						})
					) : (
						''
					)}
				</div>
			</div>
			<Featured />
		</div>
	);
};

export default Item;

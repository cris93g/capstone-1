import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Item.scss';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/ducks/itemReducer';
import { Link } from 'react-router-dom';
import Featured from '../../Components/Featured/Featured';
const Item = () => {
	const [ items, setItems ] = useState([]);
	let { id } = useParams();
	useEffect(
		() => {
			axios
				.post(`/api/item`, {
					item_id: id
				})
				.then((results) => {
					setItems(results.data);
				});
		},
		[ id ]
	);
	const dispatch = useDispatch();
	return (
		<div>
			<div className="itemWrapper">
				<div>
					{items ? (
						items.map((item) => {
							return (
								<div style={{ display: 'flex' }} key={item.item_id}>
									<div>
										<img src={item.item_pic} className="leftItemSide" />
									</div>
									<div className="rightItemSide">
										<div className="infoWrapper">
											<p>{item.item_name}</p>
											<p>{item.item_desc}</p>
											<p>{`sku# ${item.item_sku}`}</p>
											<p>{item.item_price}</p>
											<Link to="/cart">
												{' '}
												<div className="cartB" onClick={() => dispatch(addToCart(item))}>
													ADD TO CART
												</div>
											</Link>
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
			<div>
				<Featured />
			</div>
		</div>
	);
};

export default Item;

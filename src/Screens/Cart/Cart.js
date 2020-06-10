import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useCallback } from 'react-redux';
import { getCart, removeFromCart,clearCart } from '../../redux/ducks/itemReducer';
import { Card, Icon, Image, CardContent } from 'semantic-ui-react';
import '../Main/Main.scss';
import Nav from '../../Components/Nav/Nav';
import { Link } from 'react-router-dom';
const Cart = () => {
	const item = useSelector((state) => state.itemsReducer.cart);
	const dispatch = useDispatch();
	useEffect(() => dispatch(getCart()), []);
	let num = [];
	let parse = [];
	let sum = 0;
	let add = (array) => {
		for (let i = 0; i < array.length; i++) {
			parse.push(array[i].item_price);
		}
		for (let i = 0; i < parse.length; i++) {
			num.push(parseInt(parse[i].split('$')[1]));
		}
		sum = num.reduce((acc, val) => {
			return acc + val;
		}, 0);
		return sum;
	};
	add(item);
	return (
		<div>
			<Nav />
			<div className="outerWrapper">
				<div className="cardWrapper">
					{item.length > 0 ? (
						item.map((it) => {
							return (
								<div>
									<Card>
										<Image src={it.item_pic} wrapped ui={false} />
										<Card.Content>
											<Card.Header>{it.item_name}</Card.Header>
											<Card.Meta>
												<span className="date">{it.item_category}</span>
											</Card.Meta>
											<Card.Description>{it.item_desc}</Card.Description>
										</Card.Content>
										<Card.Content extra style={{ display: 'flex', justifyContent: 'space-around' }}>
											<Link to={`/item/${it.item_id}`}>
												<a>{it.item_price}</a>
											</Link>
											<a onClick={() => dispatch(removeFromCart(it.item_id))}>remove</a>
										</Card.Content>
									</Card>
								</div>
							);
						})
					) : (
						<h2>Please add something to your cart</h2>
					)}
				</div>
			</div>
			{/* <button onClick={()=>dispatch(clearCart())}>clear cart</button> */}
		</div>
	);
};

export default Cart;

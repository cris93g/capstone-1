import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, removeFromCart } from '../../redux/ducks/itemReducer';
import '../Main/Main.scss';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Cart.scss';
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
			<div />
			<div className="cartOuter">
				<div>
					{item.length > 0 ? (
						item.map((it) => {
							return (
								<div className="cartWrapper">
									<img style={{ maxWidth: '100px', marginTop: '10px' }} src={it.item_pic} />
									<p style={{ marginLeft: '10%' }}>{it.item_price}</p>

									<a className="cartDeleteB" onClick={() => dispatch(removeFromCart(it.item_id))}>
										remove
									</a>
									<hr />
								</div>
							);
						})
					) : (
						<h2>Please add something to your cart</h2>
					)}
				</div>
			</div>
			<hr />
			<h4 className="total">{`Your sum is $ ${sum}`}</h4>
			{item.length > 0 ? (
				<Link to="/thanks">
					<Button style={{ marginLeft: '70%' }} positive className="pay">
						PAY
					</Button>
				</Link>
			) : (
				''
			)}
		</div>
	);
};

export default Cart;

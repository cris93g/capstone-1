import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Route } from 'react-router-dom';
import '../../Screens/Main/Main.scss';
import { useDispatch, useSelector, useCallback } from 'react-redux';
import { fetchItem, addToCart } from '../../redux/ducks/itemReducer';
import { Card, Icon, Image, CardContent } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const Category = () => {
	let [ items, setItems ] = useState([]);
	let { cat } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		axios
			.post('/api/category', {
				item_category: cat
			})
			.then((results) => {
				setItems(results.data);
			});
	});
	return (
		<div>
			{' '}
			<div className="outerWrapper">
				<div className="cardWrapper">
					{items ? (
						items.map((item) => {
							return (
								<Card>
									<Image src={item.item_pic} wrapped ui={false} />
									<Card.Content>
										<Link to={`/item/${item.item_id}`}>
											<Card.Header>{item.item_name}</Card.Header>
										</Link>
										<Card.Meta>
											<span className="date">{item.item_category}</span>
										</Card.Meta>
									</Card.Content>
									<Card.Content extra style={{ display: 'flex', justifyContent: 'space-around' }}>
										<a>{item.item_price}</a>
										<a>{`Quantity:${item.item_quantity}`}</a>
										<Link to="/cart">
											<div onClick={() => dispatch(addToCart(item))}>Add to cart</div>
										</Link>
									</Card.Content>
								</Card>
							);
						})
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

export default Category;

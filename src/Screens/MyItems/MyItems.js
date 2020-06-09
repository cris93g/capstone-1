import React, { useEffect, useState } from 'react';
import { useParams, Route } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import { useDispatch, useSelector, useCallback } from 'react-redux';
import { deleteItem, getUserItems } from '../../redux/ducks/itemReducer';
import axios from 'axios';
import { Card, Icon, Image, CardContent } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../Main/Main.scss';
const MyItems = () => {
	let { id } = useParams();
	const items = useSelector((state) => state.itemsReducer.items);
	const user = useSelector((state) => state.userReducer.user);
	const dispatch = useDispatch();
	useEffect(() => dispatch(getUserItems(id)), []);
	console.log(user);

	return (
		<div>
			<Nav />
			<div className="outerWrapper">
				{user.user_id ? (
					<div className="cardWrapper">
						{items ? (
							items.map((item) => {
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
											<div
												style={{ marginTop: '50px', cursor: 'pointer' }}
												onClick={() => dispatch(deleteItem(item.item_id))}
											>
												DELETE
											</div>
										</Card.Content>
									</Card>
								);
							})
						) : (
							''
						)}
					</div>
				) : (
					<h2>please log in to view your items</h2>
				)}
			</div>
		</div>
	);
};

export default MyItems;

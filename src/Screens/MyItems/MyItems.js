import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, getUserItems } from '../../redux/ducks/itemReducer';
import { Card, Image } from 'semantic-ui-react';
import '../Main/Main.scss';
import './MyItems.scss';
const MyItems = () => {
	let { id } = useParams();
	const items = useSelector((state) => state.itemsReducer.items);
	const user = useSelector((state) => state.userReducer.user);
	const dispatch = useDispatch();
	useEffect(() => dispatch(getUserItems(id)));
	return (
		<div>
			<div className="yourItemsBanner" />
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
											<a>{item.item_price}</a>

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
							<h2 style={{ display: 'flex', marginLeft: '45%' }}>
								You currently dont have any items added
							</h2>
						)}
					</div>
				) : (
					<h2 style={{ display: 'flex', marginLeft: '40%' }}>please log in to view your items</h2>
				)}
			</div>
		</div>
	);
};

export default MyItems;

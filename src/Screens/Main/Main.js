import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useCallback } from 'react-redux';
import { fetchItem } from '../../redux/ducks/itemReducer';
import { Card, Icon, Image, CardContent } from 'semantic-ui-react';
import './Main.scss';
import Nav from '../../Components/Nav/Nav'
import {Link} from 'react-router-dom'

const Main = () => {
	const items = useSelector((state) => state.itemsReducer.items);
	const dispatch = useDispatch();
	useEffect(() => dispatch(fetchItem()), []);
	
	return (
		<div>
		<Nav />

		<div className="outerWrapper">
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
								<Card.Content extra>
								<Link to={`/item/${item.item_id}`}><a>{item.item_price}</a></Link>	
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

export default Main;

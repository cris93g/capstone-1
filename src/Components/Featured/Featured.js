import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Icon, Image, CardContent } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../../Screens/Main/Main.scss';
const Featured = () => {
	const [ items, setItems ] = useState([]);
	useEffect(() => {
		axios.get(`/api/items`).then((results) => {
			setItems(results.data);
		});
	}, []);

	let shuffled = items.sort(function(a, b) {
		return 0.5 - Math.random();
	});

	return (
		<div className="featuredWrapper">
			<div className="cardWrapper">
				<div
					className="featuredItems"
					style={{ display: 'flex', marginTop: '-12%', justifyContent: 'space-around' }}
				>
					{shuffled ? (
						shuffled.slice(-4).map((item) => {
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

export default Featured;

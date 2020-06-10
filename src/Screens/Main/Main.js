import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector, useCallback } from 'react-redux';
import { fetchItem, addToCart } from '../../redux/ducks/itemReducer';

import { Card, Icon, Image, CardContent } from 'semantic-ui-react';
import './Main.scss';
import Nav from '../../Components/Nav/Nav';
import { Link } from 'react-router-dom';

const Main = () => {
	const items = useSelector((state) => state.itemsReducer.items);
	const dispatch = useDispatch();
	useEffect(() => dispatch(fetchItem()), []);
	console.log(items);
	return (
		<div>
			<Nav />
			<div />
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
                      <span className='date'>{item.item_category}</span>
                    </Card.Meta>
                  </Card.Content>
                  <Card.Content
                    extra
                    style={{ display: 'flex', justifyContent: 'space-around' }}
                  >
                    <a>{item.item_price}</a>
                    <a>{`Quantity:${item.item_quantity}`}</a>
                    <Link to='/cart'>
                      <div onClick={() => dispatch(addToCart(item))}>
                        Add to cart
                      </div>
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

export default Main;

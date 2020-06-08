import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector, useCallback } from 'react-redux';
import { getCart } from '../../redux/ducks/itemReducer';
import { Card, Icon, Image, CardContent } from 'semantic-ui-react';
import '../Main/Main.scss';
import {Link} from 'react-router-dom'
const Cart = ()=>{
    const item = useSelector((state) => state.itemsReducer.cart);
    const dispatch = useDispatch();
    useEffect(() => dispatch(getCart()), []);
    console.log(item)
    return(
        <div>
            <p>{item.item_name}</p>
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
        </div>
    )
}

export default Cart
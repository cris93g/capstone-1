import React, { useState } from 'react';
import './Nav.scss';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import Auth from '../../Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
const Nav = () => {
	const [ showMenu, setShowMenu ] = useState(false);
	const user = useSelector((state) => state.userReducer.user);
	const items = useSelector((state) => state.itemsReducer.cart);
	const dispatch = useDispatch();

	return (
		<div className="outerContainer">
			<Link to="/">
				{' '}
				<h1 className="mainTitle" style={{ letterSpacing: '1em', display: 'flex', margin: 'auto' }}>
					easy-buy
				</h1>
			</Link>
			<div className="navWrapper">
				<div className="leftItems">
					<Auth />
				</div>
				<div className="rightNavs" style={{ color: 'black' }}>
					<Link to="/main">
						<div>Browse</div>
					</Link>
					<Link to="/sell">
						<div>Sell</div>
					</Link>
					<div>
						<div>
							<Link to={`/myitems/${user.user_id}`}>MyItems</Link>
						</div>
					</div>

					<Link to="/cart">
						<i className="material-icons">shopping_cart</i>
						{items.length}
					</Link>
				</div>
				<Search />
			</div>
		</div>
	);
};

export default Nav;

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
	let show = (e) => {
		e.preventDefault();
		setShowMenu(true, () => {
			document.addEventListener('click', closeMenu);
		});
	};

	let closeMenu = () => {
		setShowMenu(false, () => {
			document.removeEventListener('click', closeMenu);
		});
	};
	console.log(items);
	return (
		<div className="navWrapper">
			<Link to="/main">
				<div className="title" />
			</Link>
			<Search />
			<div className="rightNavs" style={{ color: 'white' }}>
				<Link to="/sell">
					<div>Sell</div>
				</Link>
				<div>
					<div>
						<Link to={`/myitems/${user.user_id}`}>MyItems</Link>
					</div>
					{/* <div onClick={show} style={{ color: 'white' }}>
						Category
					</div> */}
					{/* {showMenu ? (
						<div className="menu">
							<div>
								<Link to={``}>
									{' '}
									<ul> Clothes </ul>
								</Link>
								<Link to={``}>
									<ul> Electronics </ul>
								</Link>
								<Link to={``}>
									{' '}
									<ul> Outdoor </ul>
								</Link>
								<Link to={``}>
									{' '}
									<ul> Food </ul>
								</Link>
							</div>
							<div>
								<Link to={``}>
									{' '}
									<ul> Beauty </ul>
								</Link>
								<Link to={``}>
									{' '}
									<ul> House </ul>
								</Link>
								<Link to={``}>
									{' '}
									<ul> Toys </ul>
								</Link>
							</div>
						</div>
					) : null} */}
				</div>
				<Link to="/cart">
					<i className="material-icons">shopping_cart</i>
					{items.length}
					{/* {this.props.itemReducer.cart.length} */}
				</Link>
			</div>
			<Auth />
		</div>
	);
};

export default Nav;

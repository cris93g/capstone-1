import React from 'react';
import './Nav.scss';
import Search from '../Search/Search'
import {Link} from 'react-router-dom'
import Auth from '../../Auth/Auth'
const Nav = () => {
	return <div className="navWrapper">
		<Link to='/main'><h1 className='title'>Better-craig</h1></Link>
		<Search/>
		<div className='rightNavs'>
			<div>Home</div>
			<div>cart</div>
		</div>
		<Auth/>
		</div>;
};

export default Nav;

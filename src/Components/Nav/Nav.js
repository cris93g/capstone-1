import React,{useState} from 'react';
import './Nav.scss';
import Search from '../Search/Search'
import {Link} from 'react-router-dom'
import Auth from '../../Auth/Auth'

const Nav = () => {
	const [showMenu,setShowMenu]=useState(false)


	let show= (e)=>{
		e.preventDefault()
		setShowMenu(true,()=>{
			document.addEventListener('click', closeMenu);
		})
	}

	let closeMenu=()=> {
		setShowMenu(false, () => {
			document.removeEventListener('click', closeMenu);
		});
	}
	return <div className="navWrapper">
		<Link to='/main'><h1 className='title'>Better-craig</h1></Link>
		<Search/>
		<div className='rightNavs' style={{color:'white'}}>
			<div>Home</div>
			<div>
				<div onClick={show} style={{color:'white'}}>Category</div>
				{showMenu ? (
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
				) : null}
			<Link to="/cart">
				{/* <i className="material-icons">shopping_cart</i> {this.props.itemReducer.cart.length} */}
			</Link></div>
		</div>
		<Auth/>
		</div>;
};

export default Nav;

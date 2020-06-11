import React from 'react';
import './Brands.scss';
import { Link } from 'react-router-dom';
const Brands = () => {
	let electronics = 'electronics',
		furniture = 'furniture',
		clothes = 'clothes',
		toys = 'toys';
	return (
		<div className="brandsOuter">
			<div className="innerBrands">
				<h2>Categorys</h2>
				<Link to={`/category/${electronics}`}>
					<p>Electronics</p>
				</Link>
				<Link to={`/category/${furniture}`}>
					<p>Furniture</p>
				</Link>
				<Link to={`/category/${clothes}`}>
					<p>Clothes</p>
				</Link>
				<Link to={`/category/${toys}`}>
					<p>Toys</p>
				</Link>
			</div>
		</div>
	);
};

export default Brands;

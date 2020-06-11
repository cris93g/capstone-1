import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Featured from '../../Components/Featured/Featured';
import './FrontPage.scss';
import { Link } from 'react-router-dom';
const FrontPage = () => {
	return (
		<div>
			<div className="homeImage" />
			<p className="headerText">easy-buy</p>
			<p className="headerSubText">Buying and Selling made easy</p>
			<div className="divider">
				<div className="leftSide" />
				<Link to="/main">
					<p className="buyText">Purchase some great items</p>
				</Link>
				<div className="rightSide" />
				<Link to="/sell">
					<p className="sellText">Sell and Make some cash</p>
				</Link>
			</div>
			<h1 className="featuredText">Some featured Items</h1>
			<div className="frontPageFeatured">
				<Featured />
			</div>
		</div>
	);
};

export default FrontPage;

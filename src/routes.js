import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Screens/Main/Main';
import Item from './Screens/Item/Item';
import SearchResults from './Screens/SearchResults/SearchResults';
import Cart from './Screens/Cart/Cart';
import NewItem from './Screens/NewItem/NewItem';
import MyItems from './Screens/MyItems/MyItems';
import FrontPage from './Screens/FrontPage/FrontPage';
import Category from './Screens/Category/Category';
import ThankYou from './Screens/ThankYou/ThankYou';
export default (
	<Switch>
		<Route component={FrontPage} exact path="/" />
		<Route component={Main} path="/main" />
		<Route component={Item} path="/item/:id" />
		<Route component={SearchResults} path="/search/:id" />
		<Route component={Cart} path="/cart" />
		<Route component={NewItem} path="/sell" />
		<Route component={MyItems} path="/myitems/:id" />
		<Route component={Category} path="/category/:cat" />
		<Route component={ThankYou} path="/thanks" />
	</Switch>
);

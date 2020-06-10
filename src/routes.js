import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './Screens/Landing/Landing';
import Main from './Screens/Main/Main';
import Item from './Screens/Item/Item';
import SearchResults from './Screens/SearchResults/SearchResults';
import Cart from './Screens/Cart/Cart';
import NewItem from './Screens/NewItem/NewItem';
import MyItems from './Screens/MyItems/MyItems';
export default (
	<Switch>
		<Route component={Landing} exact path="/" />
		<Route component={Main}  path="/main" />
		<Route component={Item} path="/item/:id" />
		<Route component={SearchResults} path="/search/:id" />
		<Route component={Cart}  path="/cart" />
		<Route component={NewItem}  path="/sell" />
		<Route component={MyItems} path="/myitems/:id" />
	</Switch>
);

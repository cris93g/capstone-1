import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import Nav from './Components/Nav/Nav';
import Brands from './Components/Brands/Brands';
function App() {
	return (
		<Provider store={store}>
			<Router>
				<Nav />
				<Brands />
				<div className="App">{routes}</div>
			</Router>
		</Provider>
	);
}

export default App;

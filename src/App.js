import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HashRouter as Router } from 'react-router-dom';
import routes from './routes';
import NewItem from './Screens/NewItem/NewItem';
import Nav from './Components/Nav/Nav';
import SidebarComp from './Components/SideBarComp/SideBarComp';
function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">{routes}</div>
			</Router>
		</Provider>
	);
}

export default App;

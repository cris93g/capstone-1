const {
	addNewItem,
	getAllItems,
	getUserItems,
	deleteSpecificItem,
	getItemByCategory,
	getItem,
	getCart,
	addToCart,
	removeFromCart
} = require('../Controller/storeController');

module.exports = (app) => {
	app.post(`/api/new-item`, addNewItem);
	app.get(`/api/items`, getAllItems);
	app.post(`/api/useritems`, getUserItems);
	app.post(`/api/deleteItem`, deleteSpecificItem);
	app.post(`/api/category`, getItemByCategory);
	app.post(`/api/item`, getItem);
	app.get('/api/cart', getCart);
	app.post('/api/cart', addToCart);
	app.get('/api/recart', removeFromCart);
};

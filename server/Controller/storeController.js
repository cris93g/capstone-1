//our api functions most of them are async and most of them we declare our db than use on of the sql functions
let addNewItem = async (req, res) => {
	const db = await req.app.get('db');
	const { item_name, item_desc, item_price, item_category, item_pic, user_id, item_quantity } = req.body;
	let generateSku = (str) => {
		return str.split('').map((letter) => letter.charCodeAt(0)).reduce((a, b) => a + b);
	};
	let newSku = await generateSku(item_name);
	let results = await db.add_item(
		item_name,
		item_desc,
		item_price,
		item_category,
		item_pic,
		user_id,
		item_quantity,
		newSku
	);
	results ? res.status(200).send(results) : res.json({ sucess: false, message: 'failed to add item' });
};

let getUserItems = async (req, res) => {
	const { user_id } = req.body;
	const db = await req.app.get('db');
	let results = await db.get_user_items([ user_id ]);
	results ? res.status(200).send(results) : res.json({ sucess: false, message: 'failed to get items' });
};
let getAllItems = async (req, res) => {
	let db = await req.app.get('db');
	let results = await db.get_items();
	results ? res.status(200).send(results) : res.json({ sucess: false, message: 'failed to get items' });
};

let deleteSpecificItem = async (req, res) => {
	const { item_id } = req.body;
	let db = await req.app.get('db');
	let results = await db.delete_item([ item_id ]);
	results ? res.status(200).send(results) : res.json({ sucess: false, message: 'failed to delete items' });
};

let getItemByCategory = async (req, res) => {
	const { item_category } = req.body;
	let db = await req.app.get('db');
	let results = await db.get_item_by_category([ item_category ]);
	results ? res.status(200).send(results) : res.json({ sucess: false, message: 'failed to load items' });
};

let getItem = async (req, res) => {
	const { item_id } = req.body;
	let db = await req.app.get('db');
	let results = await db.get_item([ item_id ]);
	results ? res.status(200).send(results) : res.json({ sucess: false, message: 'failed to load item' });
};

let addToCart = (req, res) => {
	req.session.cart.push(req.body);
	res.status(200).send(req.session.cart);
};

let getCart = (req, res) => {
	res.status(200).send(req.session.cart);
};
let removeFromCart = async (req, res) => {
	let { id } = req.body;
	let { cart } = req.session;
	let i = 0;
	while (i < cart.length) {
		if (cart[i].item_id === id) {
			cart.splice(i, 1);
		}
		i++;
	}
	res.status(200).send(req.session.cart);
};
let clearCart = async (req, res) => {
	req.session.cart = [];
	res.status(200).send(req.session.cart);
};
let updateQuantity = async (req, res) => {
	let { item_quantity, item_id } = req.body;
	let db = await req.app.get('db');
	let results = await db.updateQuantity([ item_quantity, item_id ]);
	results ? res.status(200).send(results) : res.json({ sucess: false, message: 'failed to load item' });
};
module.exports = {
	addNewItem,
	getAllItems,
	getUserItems,
	deleteSpecificItem,
	getItemByCategory,
	getItem,
	addToCart,
	getCart,
	removeFromCart,
	updateQuantity,
	clearCart
};

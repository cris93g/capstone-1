require('dotenv').config();
//import librarys needed
const express = require('express'),
	cors = require('cors'),
	{ json } = require('body-parser'),
	{ getUser, strat, logout } = require(`${__dirname}/Controller/authController`),
	passport = require('passport'),
	session = require('express-session'),
	massive = require('massive'),
	routes = require('./routes/routes'),
	{ SESSION_SECRET, CONNECTION_STRING, PORT } = process.env;
//makes server and port for server
const app = express();
const port = PORT || 3001;
//connects to db
massive(CONNECTION_STRING).then((db) => {
	app.set('db', db);
});
//cors is so no one hits our end points and json to parse through the data
app.use(cors());
app.use(json());
//creates a session to store data
app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 100000
		}
	})
);
//passport intiliaze and their session to store user
app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);
//passes user than calls getuserauthid to check if user is there if not than adds him
passport.serializeUser((profile, done) => {
	const db = app.get('db');
	db.get_user_authid(profile.id).then((user) => {
		if (!user[0]) {
			db
				.add_user_authid(profile.displayName, profile.id, profile.picture)
				.then((response) => {
					return done(null, response[0]);
				})
				.catch((err) => console.log(err));
		} else {
			return done(null, user[0]);
		}
	});
});
//passes user into session
passport.deserializeUser((user, done) => {
	done(null, user);
});
//where will user get send if they log in or if its declined
app.get(
	'/login',
	passport.authenticate('auth0', {
		successRedirect: 'http://localhost:3000/#/',
		failureRedirect: 'http://localhost:3000/#/'
	})
);
//creates session
app.use((req, res, next) => {
	if (!req.session.cart) req.session.cart = [];
	next();
});
//where to call to get user and to log out
app.get('/me', getUser);
app.get('/logout', logout);
//pulls routes
routes(app);
//listen to our server
app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});

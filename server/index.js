require('dotenv').config();
const express = require('express'),
	cors = require('cors'),
	{ json } = require('body-parser'),
	{ getUser, strat, logout } = require(`${__dirname}/Controller/authController`),
	passport = require('passport'),
	session = require('express-session'),
	massive = require('massive'),
	routes = require('./routes/routes'),
	{ SESSION_SECRET, CONNECTION_STRING, PORT } = process.env;

const app = express();
const port = PORT || 3001;

massive(CONNECTION_STRING).then((db) => {
	app.set('db', db);
});

app.use(cors());
app.use(json());

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
app.use(
	session({
		secret: SESSION_SECRET,
		resave: false,
		saveUninitialized: false
	})
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(strat);
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

passport.deserializeUser((user, done) => {

	done(null, user);
});
app.get(
	'/login',
	passport.authenticate('auth0', {
		successRedirect: 'http://localhost:3000/#/main',
		failureRedirect: 'http://localhost:3000/#/'
	})
);
app.use((req, res, next) => {
	if (!req.session.cart) req.session.cart = [];
	next();
  });
app.get('/me', getUser);
app.get('/logout', logout);

routes(app);

app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});

// initial config
require('dotenv').config(); // import all key/value pairs from .env in process.env : really usefull when going online :)
require('./config/mongo'); // database connection setup

// dependencies injection
const express = require('express');
const session = require('express-session'); //sessions make data persist between http calls
const cors = require('cors');
const _DEVMODE = false;

// ------------------------------------------
// SERVER CONFIG
// ------------------------------------------
const app = express();

// // Allow server to parse body from POST Request
// app.use(express.urlencoded({ extended: true }));

/**
 *  HEY YOU ! Happy to see that you read comments.
 *  the lines below are useful (maybe in your project too :)
 */

// Allow server to parse JSON from AJAX Request and apply the data to req.body
app.use(express.json());

// Allow server to extract/parse cookies from http requests headers (check req.cookies)
// app.use(cookieParser());

/*
Create a session middleware with the given options.
Note:  Session data is not saved in the cookie itself, just the session ID. 
Session data is stored server-side.
*/

app.use(
  session({
    cookie: { secure: false, maxAge: 4 * 60 * 60 * 1000 }, // 4 hours
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_SESSION,
  }),
);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true,
  }),
);

//------------------------------------------
// Check Loggedin Users
// ------------------------------------------
if (_DEVMODE === true) {
  app.use(require('./middlewares/userDebug'));
}

app.use((req, res, next) => {
  console.log(req.session.currentUser);
  next();
});

//------------------------------------------
// BASE BACKEND ROUTE
// ------------------------------------------

app.get('/', (req, res) => {
  res.send('backend server is running');
});

//------------------------------------------
// SPLITED ROUTING
// ------------------------------------------

const albumsRouter = require('./routes/albums.js');
const artistsRouter = require('./routes/artists.js');
const contactRouter = require('./routes/contact.js');
const labelRouter = require('./routes/labels.js');
const stylesRouter = require('./routes/styles.js');
const authRouter = require('./routes/auth');

app.use('/auth', authRouter);
app.use('/albums', albumsRouter);
app.use('/artists', artistsRouter);
app.use(contactRouter);
app.use(labelRouter);
app.use('/styles', stylesRouter);

module.exports = app;

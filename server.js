const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');


const api = require('./backend/routes');
const welcome = require('./backend/welcomeRouter');
const home = require('./backend/homeRouter');

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'otto loves his mom',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.get('/*', (request, response) => {
  response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use('/', welcome);
app.use('/', home);

app.listen(PORT, error => {
  error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

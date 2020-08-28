const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

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

// Routers
app.use('/', welcome);

// Checking if the user has a session cookie. This isn't working, but I had to move on. 
app.use(function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/#/login');
  }
});
app.use('/', home);

app.get('/*', (request, response) => {
  response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.listen(PORT, error => {
  error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});

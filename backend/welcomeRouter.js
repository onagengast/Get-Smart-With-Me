var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var models = require('./models');
var User = require('./models').User;

router.get('/', (req, res) => {
  res.end();
});

router.get('/home', (req, res) => {
  res.send('Make it home!');
});

router.post('/registration', (req, res) => {
  var newUser = new User({
    username: req.body.username,
    password: req.body.password
  });
  newUser.save(function(err, user) {
    if (err) {
      res.end('Error!');
      console.log(err);
    } else {
      res.send('Succesfully created a user!');
    }
  });
});

module.exports = router;


var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var models = require('./models');
var User = require('./models').User;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({username: username}, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {message: 'Incorrect username.'});
      }
      if (user.password !== password) {
        return done(null, false, {message: 'Incorrect password.'});
      }
      return done(null, user);
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

router.get('/login', (req, res) => {
  res.send('Successfully responsed to GET request to /login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/home',
  failureRedirect: '/login',
  passReqToCallBack: true
}));

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


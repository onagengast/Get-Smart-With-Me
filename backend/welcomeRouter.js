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
  res.end();
});

router.post('/login', function(req, res) {
  passport.authenticate('local', function(err, user) {
    if (user) {
      req.login(user, function(err2) {
        if (err2) {
          res.json({error: true});
        } else {
          res.json({
            userId: user.id,
            username: user.username,
            decks: user.decks,
            error: false
          });
        }
      });
    } else {
      res.json({error: true});
    }
  })(req, res);
});

// if(err) return res.send('Error! It\'s not you. It\'s us. Please try again.');
// const response = req.logIn(user, function(err2) {
//   if (err2) return 'Error! It\'s not you. It\'s us. Please try again.';
//   return user.id;
// });
// return res.send(response);

router.post('/registration', (req, res) => {
  var newUser = new User({
    username: req.body.username,
    password: req.body.password
  });
  newUser.save(function(err, user) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(user);
    }
  });
});

module.exports = router;


var express = require('express')
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./models').User;

console.log(User);

router.get('/', (req, res) => {
  if (req.user) { 
    router.post('/login', (req, res) => {
      // go to server 
    })
  } else {
    console.log('made it here');
    res.json('No user credentials provided');
  }
})

router.get('/home', (req, res) => {
  res.send('Make it home!')
})

router.post('/registration', (req, res) => {
  res.send('got it!');
})

module.exports = router; 


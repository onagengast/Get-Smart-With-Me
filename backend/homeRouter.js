var express = require('express');
var router = express.Router();

router.get('/home', (req, res) => {
  res.send('Made it home!');
});

router.post('/newDeck', (req, res) => {
  res.send(req.query);
});

module.exports = router;
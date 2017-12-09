var express = require('express');
var router = express.Router();
var models = require('./models');
var Deck = models.Deck;
var Card = models.Card;

router.get('/home', (req, res) => {
  res.send(req.user);
});

router.get('/deckView', (req, res) => {
  const id = req.query.deckId;
  Deck.findById(id)
  .populate('contents')
  .exec((err, deck) => {
    if (err) {
      console.log('Error! : ', err);
      res.send(err);
    } else {
      console.log(deck);
      res.send(deck);
    }
  });
});

router.post('/saveSession', (req, res) => {
  const id = req.query.deckId;
  const pile1 = req.body.pile1;
  const pile2 = req.body.pile2;
  const pile3 = req.body.pile3;
  const pile4 = req.body.pile4;
  Deck.findByIdAndUpdate(id, {new: true}, {
    pile1: pile1,
    pile2: pile2,
    pile3: pile3,
    pile4: pile4
  })
  .then(deck => {
    res.send(deck);
  })
  .catch(err => {
    console.log('Error! : ', err);
    res.send(err);
  });
});

router.post('/newDeck', (req, res) => {
  const name = req.query.name;
  const description = req.query.description;

  var newDeck = new Deck({name: name, description: description});
  newDeck.save(function(err, deck) {
    if (err) {
      console.log('Error! : ', err);
      res.send('Error! on trying to save the new deck to the DB');
    } else {
      res.send(deck);
    }
  });
});

router.post('/editDeckInfo', (req, res) => {
  const id = req.query.deckId;
  const newName = req.body.name;
  const newDescription = req.body.description;

  Deck.findByIdAndUpdate(id, {name: newName, description: newDescription}, {new: true}, (err, deck) => {
    if (err) {
      console.log('Error! : ', err);
      res.send(err);
    } else {
      res.send(deck);
    }
  });
});

router.post('/editDeckContents', (req, res) => {
  const deckId = req.query.deckId;
  const cardId = req.query.cardId;

  Deck.findById(deckId)
  .then(deck => {
    const index = deck.contents.indexOf(cardId);
    const newContents = [...deck.contents.slice(0, index), ...deck.contents.slice(index + 1)];
    deck.contents = newContents;
    return deck;
  })
  .then(deck => {
    return deck.save();
  })
  .then(deck => {
    res.send(deck);
  })
  .catch(err => {
    console.log('Error! : ', err);
    res.send(err);
  });
});

router.post('/createNewCard', (req, res) => {
  const deckId = req.query.deckId;
  const front = req.query.front;
  const back = req.query.back;
  let cardId = null;

  var newCard = new Card({front: front, back: back});
  newCard.save()
  .then(function(card) {
    cardId = card._id;
    return;
  })
  .then(function() {
    return Deck.findById(deckId);
  })
  .then(function(deck) {
    console.log(deck);
    const updatedCards = deck.contents.concat(cardId);
    deck.contents = updatedCards;
    return deck.save();
  })
  .then(function(updatedDeck) {
    res.send(updatedDeck);
  })
  .catch(function(err) {
    console.log('Error! : ', err);
    res.end('An error occured.');
  });
});

router.post('/editCard', (req, res) => {
  const id = req.query.cardId;
  const newFront = req.body.front;
  const newBack = req.body.back;
  Card.findByIdAndUpdate(id, {front: newFront, back: newBack}, {new: true}, (err, card) => {
    if (err) {
      console.log('Error! : ', err);
      res.end('An error occured.');
    } else {
      res.send(card);
    }
  });
});

module.exports = router;
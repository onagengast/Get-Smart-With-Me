var express = require('express');
var router = express.Router();
const models = require('./models');
const Deck = models.Deck;
const Card = models.Card;
const User = models.User;

router.post('/home', (req, res) => {
  console.log(req.body);
  User.findById(req.body.userId)
  .populate('decks', 'name description')
  .exec((err, user) => {
    if (err) {
      console.log('Error! : ', err);
      res.send(err);
    } else {
      console.log(user);
      res.send(user.decks);
    }
  });
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

router.post('/createNewDeck', (req, res) => {
  console.log(req.body);
  const userId = req.body.userId;
  const name = req.body.name;
  const description = req.body.description;
  let deckId = null;

  var newDeck = new Deck({name: name, description: description});
  newDeck.save()
  .then(deck => {
    deckId = deck.id;
    return;
  })
  .then(() => User.findById(userId))
  .then(user => {
    user.decks.push(deckId);
    return user.save();
  })
  .then(user => user.populate('decks', 'name description').execPopulate())
  .then(user => res.send(user.decks))
  .catch(err => {
    console.log('Error! : ', err);
    res.send(err);
  });
});

router.delete('/deleteDeck', (req, res) => {
  const userId = req.query.userId;
  const deckId = req.query.deckId;
  Deck.findByIdAndRemove(deckId)
  .then(deck => {
    // Still need to figure out how to delete the cards too. I can't get it to work.
    return Card.deleteMany({_id: {$in: deck.contents}});
  })
  .then(() => User.findById(userId))
  .then(user => {
    const index = user.decks.indexOf(deckId);
    user.decks = [...user.decks.slice(0, index), ...user.decks.slice(index + 1)];
    user.save();
  })
  .then(() => {
    res.redirect('/home');
  })
  .catch(err => {
    console.log('Error! : ', err);
    res.send(err);
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
  const newContents = req.body.contents;
  const deletedCards = req.body.deletedCards;

  Card.remove({id: {$in: deletedCards}})
  .then(() => Deck.findById(deckId))
  .then(deck => {
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
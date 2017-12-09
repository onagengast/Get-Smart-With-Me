var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect(process.env.MONGODB_URI);

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  decks: {
    type: [],
    default: []
  }
});

const User = mongoose.model('Users', userSchema);

var cardSchema = mongoose.Schema({
  front: {
    type: String,
    default: ''
  },
  back: {
    type: String,
    default: ''
  }
});

const Card = mongoose.model('Cards', cardSchema);

var deckSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  contents: [{
    type: Schema.Types.ObjectId,
    ref: 'Cards'
  }],
  currentSession: {
    type: Object,
    default: {
      pile1: [],
      pile2: [],
      pile3: [],
      pile4: []
    }
  }
});

const Deck = mongoose.model('Decks', deckSchema);

module.exports = {
  User: User,
  Deck: Deck,
  Card: Card
};
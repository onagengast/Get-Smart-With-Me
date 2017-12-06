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

module.exports = {
  User: User
};
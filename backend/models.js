var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

var userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String, 
    required: true
  },
  decks: []
}); 

const User = mongoose.model('Users', userSchema);

module.exports = {
  User: User
};
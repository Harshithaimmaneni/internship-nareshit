const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  phone: String,
  gender: String,
  dob: Date
});

module.exports = mongoose.model('User', userSchema);


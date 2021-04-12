const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: String,
  country: String,
  zip: {
    type: String,
    required: true
  },
  category: String,
});

module.exports = mongoose.model('Contact', schema);

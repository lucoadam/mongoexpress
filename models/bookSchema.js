// Filename: models/userSchema.js

// Import mongoose package for creating schema
const mongoose = require('mongoose');

// Defining schema for our database
const schema = mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
    },
    isbn: {
        type: Number,
        required: true
    },
    author: {
        type: String,
        required: true
    }
  },
);

module.exports = mongoose.model('User', schema);
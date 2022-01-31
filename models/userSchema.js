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
    location: {
      type: String,
      required: true,
    },
    age: {
        type: Number,
        required: true
    }
  },/* Schema options*/ {
    timestamps: true
  });

module.exports = mongoose.model('User', schema);
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('Student', StudentSchema);

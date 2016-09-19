const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

  name:String,
  dateCreated:{ type:Date, default: Date.now }

});

mongoose.model('User', Schema);
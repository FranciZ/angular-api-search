const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

  title:String,
  user: { type:String, ref:'User' },
  dateCreated:{ type:Date, default: Date.now }

});

mongoose.model('Task', Schema);
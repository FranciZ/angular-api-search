const mongoose = require('mongoose');

const Schema = new mongoose.Schema({

  code        : {type:String, unique:true},
  language    : {type:String, index:true},
  territory   : String,
  description : {type:String, index:true},
  nativeLang  : String

});

mongoose.model('Locale', Schema);
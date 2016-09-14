const Promise = require('bluebird');
const mongoose = require('mongoose');


exports.init = function(){

  return new Promise(function(resolve, reject){

    mongoose.connect('mongodb://localhost/search_db');

    mongoose.connection.once('open', function(){

      resolve();

    });

    mongoose.connection.on('error', function(err){

      reject(err);

    });

  });

};
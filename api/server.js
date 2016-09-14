const express = require('express');
const app = express();
const Promise = require('bluebird');
const bodyParser = require('body-parser');
const cors = require('cors');

exports.init = function(){

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  return new Promise(function(resolve, reject){

    app.listen(3011, function(){

      resolve(app);

    });

  });



};
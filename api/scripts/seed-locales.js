const run = require('../run');
const locales = require('../assets/locales');
const Promise = require('bluebird');
const _ = require('lodash');
const mongoose = require('mongoose');

run()
.then(function(){

  const localesArray = [];

  _.each(locales, function(localeObject, key){

    localeObject.code = key;
    localesArray.push(localeObject);

  });

  Promise.reduce(localesArray, function(count, locale){

    const Locale = mongoose.model('Locale');

    const newLocale = new Locale(locale);

    count++;

    return new Promise(function(resolve, reject){
      newLocale.save()
        .then(function(){

          resolve(count);

        });
    });


  }, 0).then(function(count){

    console.log(count);

  })
    .catch(function(err){
      console.log(err);
    });

});
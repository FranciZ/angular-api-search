const db = require('./database');
const server = require('./server');
const localeRouter = require('./resources/locale/locale-router');

function init(){

  return db.init()
    .then(server.init)
    .then(function(app){

      localeRouter(app);

      require('./resources/locale/locale-model');

    })
    .then(function(){

      console.log('App running');

    })
    .catch(function(err){

      console.log(err, err.stack);

    });

}

init();

module.exports = init;
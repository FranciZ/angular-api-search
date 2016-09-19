const db = require('./database');
const server = require('./server');
const localeRouter = require('./resources/locale/locale-router');
const userRouter = require('./resources/user/user-router');
const taskRouter = require('./resources/task/task-router');


function init(){

  return db.init()
    .then(server.init)
    .then(function(app){

      localeRouter(app);
      userRouter(app);
      taskRouter(app);

      require('./resources/user/user-model');
      require('./resources/task/task-model');
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
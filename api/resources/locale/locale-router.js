const mongoose = require('mongoose');

module.exports = function(app){

  app.get('/search', function(req, res){

    const term = req.query.term;

    const Locale = mongoose.model('Locale');

    Locale.find(
      {
          $or:[
            {
              language    :{ $regex:new RegExp(term,'gi') }
            },
            {
              description :{ $regex:new RegExp(term,'gi') }
            }
          ]
      })
      .then(function(docs){

        res.send(docs);

      })
      .catch(function(err){

        res.status(400).send(err, err.stack);

      });

  });

};
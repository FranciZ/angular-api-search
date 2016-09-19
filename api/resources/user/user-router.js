const mongoose = require('mongoose');


module.exports = (app) =>{

  app.post('/user', (req, res) =>{

    const User = mongoose.model('User');

    const user = new User({
      name:req.body.name
    });

    user.save()
      .then(()=>{

        console.log(user);
        res.send(user);

      });

  });

  app.get('/users', (req, res)=>{

    const User = mongoose.model('User');

    User.find()
      .then((docs)=>{

        res.send(docs);

      });

  });

};
const mongoose = require('mongoose');


module.exports = (app) =>{

  app.post('/task', (req, res) =>{

    const Task = mongoose.model('Task');

    const task = new Task({
      title:req.body.title,
      user:req.body.user
    });

    task.save()
      .then(()=>{

        console.log(task);
        res.send(task);

      });

  });

  app.get('/tasks', (req, res)=>{

    const Task = mongoose.model('Task');

    Task.find()
      .populate('user')
      .then((docs)=>{

        res.send(docs);

      });

  });

  app.get('/user/:userId/tasks', (req, res)=>{

    const Task = mongoose.model('Task');

    Task.find({user:req.params.userId})
      .populate('user')
      .then((docs)=>{

        res.send(docs);

      });

  });


};









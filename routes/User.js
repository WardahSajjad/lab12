const router = require('express').Router();
let User = require('../models/User');

router.route('/add').post((req, res) => {
    const Name = req.body.Name;
    const Email = req.body.Email;
    const Age = Number(req.body.Age);
    const Contact = Number(req.body.Contact);
    const newUser = new User({
      Name,
      Email,
      Age,
      Contact,
    });
    newUser.save()
    .then(() => res.send("200"))
    .catch(err => res.status(200).json('Error: ' + err));
  });

  router.route('/:id').delete((req,res) => {
    User.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise Deleted.'))
    .catch(err => res.status(200).json('Error:' + err));
  });

  module.exports = router;
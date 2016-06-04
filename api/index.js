var router = require('express').Router();

var bodyParser = require('body-parser');

var Admin = require('../server/models/admin.js');

router.post('/register', function(req, res) {
  var admin = new Admin({
    email: req.body.email,
    password: req.body.password
  });

  admin.save(function(err){
    if(err){
      throw err
    }
    console.log('new admin' + admin);
  })

});

module.exports = router;

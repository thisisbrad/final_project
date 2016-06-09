var express = require('express');
var passport = require('passport');
var router = require('express').Router();
var bodyParser = require('body-parser');

var Admin = require('../server/models/admin.js');

//var admin = new Object();

router.post('/register', function(req, res) {
  var admin = new Admin({
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    gender: req.body.gender,
    street_address: req.body.street_address,
    postal_code: req.body.postal_code,
    postion: req.body.postion,
    date_created: Date.now
  });

  admin.save(function(err){
    if(err) throw err;
    console.log('new admin' + admin);
  });

  passport.authenticate('local')(req, res, function () {
    return res.status(200).json({
      status: 'Registration successful!'
    });
  });
});

//authenticate login
router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, admin, info) {
    if (err) {
      return next(err);
    }
    if (!admin) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(admin, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      res.status(200).json({
        status: 'Login successful!'
      });
    });
  })(req, res, next);
});

module.exports = router;

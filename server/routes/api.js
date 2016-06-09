// var express = require('express');
// var router = express.Router();
// var passport = require('passport');
//
// var Admin = require('../models/admin.js')
//
// var admin = new Object();
//
// //authenticate register
// router.post('/register', function(req, res) {
//   Admin.register(new Admin({ email: req.body.email }),
//     req.body.password, function(err, account) {
//     if (err) {
//       return res.status(500).json({
//         err: err
//       });
//     }
//     passport.authenticate('local')(req, res, function () {
//       return res.status(200).json({
//         status: 'Registration successful!'
//       });
//     });
//   });
// });
//
// //authenticate login
// router.post('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, admin, info) {
//     if (err) {
//       return next(err);
//     }
//     if (!admin) {
//       return res.status(401).json({
//         err: info
//       });
//     }
//     req.logIn(admin, function(err) {
//       if (err) {
//         return res.status(500).json({
//           err: 'Could not log in user'
//         });
//       }
//       res.status(200).json({
//         status: 'Login successful!'
//       });
//     });
//   })(req, res, next);
// });
//
//
// module.exports = router;

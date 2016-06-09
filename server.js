var express = require('express');
var logger = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');

var Admin = require('./server/models/admin.js');
//var routes = require('./routes/api.js');

passport.use('login', new localStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
},
function(req, email, password, done){
  process.nextTick(function(){
    Admin.findOne({'email': email, 'password': password}, function(err, Admin){
      if(Admin)
        return done(null, Admin);
      if(err)
        return err;
      return false;
    });
  });
}
));

passport.serializeUser(function(Admin, done) {
    done(null, Admin);
});

passport.deserializeUser(function(Admin, done) {
    done(null, Admin);
});

// Init App
var app = express();

// Connect to the database
mongoose.connect('mongodb://localhost/final_project');

function isLoggedIn(req, res, next) {
  if(req.isAuthenticated())
    return next();
    res.redirect('/home');
  }

app.get('/home', isLoggedIn, function(req, res) {
  res.render('./client/partials/home.html', {
    admin: req.Admin
  });
});

// Define middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Express Session
app.use(expressSession({
  secret: 'Hello World',
  resave: true,
  saveUninitialized: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Set Static Folder
app.use(express.static('client'));

// Get client folder
app.get('*', function(req, res, next){
  res.sendFile(__dirname + "/client/index.html");
});

app.get('/logout', function(req, res) {
  req.logout();
  res.send(200);
});

app.post('/api/login', passport.authenticate('login'), function(req, res) {
  res.redirect('/home');
});

app.use('/api', require('./api/index.js'));

var server = app.listen(process.env.PORT || 3000, function(){
  console.log("running on port", server.address().port);
});

var express = require("express");
var app = express();
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressSession = require('express-session');
var mongoose = require('mongoose');
var hash = require('bcrypt-nodejs');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;

mongoose.connect('mongodb://localhost/final_project');

// var Admin = require('./models/admin.js');
// var routes = require('./routes/api.js');

app.use(express.static('client'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'Hello World',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


// passport.use(new localStrategy(Admin.authenticate()));
// passport.serializeAdmin(Admin.serializeAdmin());
// passport.deserializedAdmin(Admin.deserializedAdmin());
// app.use('/admin/', routes);
// app.use('/api', require('./routes/api.js'));

app.get('*', function(req, res, next){
  res.sendFile(__dirname + "/client/index.html");
});

app.use('/api', require('./api/index.js'));

var server = app.listen(process.env.PORT || 3000, function(){
  console.log("running on port", server.address().port);
});

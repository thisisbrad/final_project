// Employee models
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Employee = new Schema({
  email: String,
  password: String
});

Employee.plugin(passportLocalMongoose);

module.exports = mongoose.model('employees', Employee);

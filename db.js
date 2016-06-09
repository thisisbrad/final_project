var mongoose = require('mongoose');

// Connect to the database
mongoose.connect('mongodb://localhost/final_project');

module.exports = mongoose.connection;
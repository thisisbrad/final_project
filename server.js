var express = require("express");
var app = express();

app.get('*', function(req, res, next){
  res.sendFile(__dirname + "/client/index.html");
});

var server = app.listen(process.env.PORT || 3000, function(){
  console.log("running on port", server.address().port);
});

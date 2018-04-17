var express = require('express');
var app = express();
app.get('/', function(req, res){
 res.send("Hello world! by express");
});
app.listen(8080);

app.get('/test',function(req,res){
  res.send("this is route 2");
});

//var http = require('http');
var knockknock = require('knock-knock-jokes');
app.get('/joke',function(req,res){
  var randomJoke = knockknock();
  res.send(randomJoke);
  //res.send ("test");
});

app.get('/add', function(req, res){
var x = req.query.x;
var y = req.query.y;
 res.send("X + Y="+(x+y));
});

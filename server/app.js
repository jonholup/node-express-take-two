console.log('Starting up the server');

var express = require('express'); // bring in express library
var app = express(); //returns an object with a bunch of function properties (including get and post)

app.use(express.static('server/public')); // incoming request for a static file? look in public folder

var fishiesList = [{name: 'walleye'}, {name: 'shrimp'}, {name: 'muskellunge'}]

app.get('/fish', function(req, res){
  console.log('req: ', req);
  res.send(fishiesList);
});
// handle the request for the first fish
app.get('/fish/first', function(req, res){
  res.send(fishiesList[0]);
});
// handle request for the name of the first fish
app.get('/fish/first/name', function(req, res){
  res.send(fishiesList[0].name);
});

// handle request for last fish
app.get('/fish/last', function(req, res){
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex]);
});
// handle request for the name of the last fish
app.get('/fish/last/name', function(req, res){
  var lastIndex = fishiesList.length - 1;
  res.send(fishiesList[lastIndex].name);
});
app.listen(5000);

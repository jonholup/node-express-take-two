console.log('Starting up the server');

var express = require('express'); // bring in express library
var app = express(); //returns an object with a bunch of function properties (including get and post)

app.use(express.static('server/public')); // incoming request for a static file? look in public folder

app.listen(5000);

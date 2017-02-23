console.log('Starting up the server');

var express = require('express'); // bring in express library
var app = express(); //returns an object with a bunch of function properties (including get and post)
var bodyParser = require('body-parser');
var fish = require('./routes/fish.js');

app.use(express.static('server/public')); // incoming request for a static file? look in public folder
app.use(bodyParser.urlencoded({extended: true})); // this creates rec.body

app.use('/fish', fish);
app.listen(5000);

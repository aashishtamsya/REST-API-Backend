var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//For Connection
mongoose.connect('mongodb://localhost/bookstore')
var db = mongoose.connection;

app.get("/", function(req, res) {
	res.send('Hello World');
});

app.listen(3500);
console.log('Running on port 3000...')
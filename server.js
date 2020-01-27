var express = require('express');

var app = express();

var routes = require('./routes');

var bodyParser = require ('body-parser');
var morgan = require ('morgan');
var mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://touradmin:Nokia777@udemydb-pknct.mongodb.net/test');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.use(morgan('dev'));

var port = process.env.PORT || 8090;

app.use('/', routes);

// localhost:8090/tourLocations

app.listen(port);

console.log('listening to port' + port);

module.exports = app;
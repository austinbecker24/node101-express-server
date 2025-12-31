// import files and packages up here
let morgan = require('morgan');
let express = require('express');
let topSpots = require('./data.json');


// create your express server below
const app = express();

// add your routes and middleware below
app.use(morgan('dev'));

// root route should return an HTML page with the Top Spots
app.get('/', function(req, res) {
  res.send('<!doctype html>' +
    '<html>' +
    '<head><meta charset="utf-8"><title>Top Spots</title></head>' +
    '<body>' +
    '<h1>Top Spots</h1>' +
    '<p>Find the best places to visit in San Diego.</p>' +
    '</body>' +
    '</html>'
  );
});

// data route should return the JSON data
app.get('/data', function(req, res) {
  res.json(topSpots);
});


// finally export the express application
module.exports = app;

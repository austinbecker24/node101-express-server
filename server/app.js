// import files and packages up here
let morgan = require('morgan');
let express = require('express');
const topSpots = require('./data.json');
const {name, description, location} = topSpots;


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
    '<p>Find the <em><b>best</b></em> places to visit in San Diego.</p>' +
    '<br><br>' +
    '<ul>' +
    topSpots.map(spot =>
      `<li>
        <h2>${spot.name}</h2>
        <p><strong>Description:</strong> ${spot.description}</p>
        <p><strong>Location:</strong> ${spot.location}</p>
      </li>`
    ).join('') +
    '</ul>' +
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

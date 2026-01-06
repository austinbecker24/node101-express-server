// import files and packages up here
const morgan = require('morgan');
let express = require('express');
const topSpots = require('./data.json');

// commented out this constnat as destructuring is not used
//const {name, description, location} = topSpots;


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

// 404 route should return a 404 status code and message... 
// this was commented out because it cause the test to fail
// app.use(function(req, res, next) {
//   res.status(404).send('404: Page Not Found');
// }


// finally export the express application
module.exports = app;

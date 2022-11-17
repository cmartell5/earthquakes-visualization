function createMap(earthquakes) {

  // Create the tile layer that will be the background of our map.
  var earthquakeMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

// Create a baseMaps object to hold the basemap layer.
var baseMaps = {
  "Earthquake Map": earthquakeMap
};

// Create an overlayMaps object to hold the earthquake location layer.
var overlayMaps = {
  "Earthquake Locations": earthquakes
};

// Create the map object with options.
var map = L.map("map-id", {
  center: [40.73, -74.0059],
  zoom: 12,
  layers: [earthquakeMap, earthquakes]
});

// Create a layer control, and pass it baseMaps and overlayMaps. 
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(map);
}

// var queryUrl = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Store API link -->
const API_KEY = "pk.eyJ1IjoiY2hleWVubmVwYXJyb3R0IiwiYSI6ImNraGJhZnp6czBkbG0ycnNhMWozcGpsYWMifQ.lL6x_cnw_ya4MtHSvTJ_gA"

// Adding tile layer
var satellitemap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
attribution: "©️ <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> ©️ <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
tileSize: 512,
maxZoom: 18,
zoomOffset: -1,
id: "mapbox/streets-v9",
accessToken: API_KEY
});
//   initialize layer groups
earthquakes= new L.LayerGroup()

var baseMaps = {
  "Satellite": satellitemap
};

var overlayMaps = {
  "Earthquakes": earthquakes
};
// Creating map object
var myMap = L.map("map", {
  center: [40.7128, -74.0060],
  zoom: 3,
  layers: [satellitemap, earthquakes]
});

// Create a layer control
// Pass in our baseMaps and overlayMaps
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: true
}).addTo(myMap);

function colorDisplay(depth){
if (depth > 90) return "purple";
else if (depth > 70) return "Red";
else if (depth > 50) return "Orange";
else if (depth > 30) return "blue";
else if (depth > 10) return  "Yellow";
else return "green";
};
var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson";

// Grab data with d3 and read it
d3.json(url, function(data) {
console.log(data);
console.log(data.features);
L.geoJSON(data, {
  // Defines what to do with each point in JSON
  pointToLayer: function (feature, latlng) {
      var depth = feature.geometry.coordinates[2]
      var mag = feature.properties.mag
      // Circle marker applied for each feature
      return L.circle(latlng, {
          color: "blue", // the color of each circle
          // Show the fill color based on the depth 
          fillColor: colorDisplay(depth),
          fillOpacity: .5, 
          radius: mag * 40000,
          weight: 1,
    })
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup("<b>Location:</b> " + feature.properties.place + "<br><b>Magnitude:</b> " + feature.properties.mag +
     "<br><b>Depth:</b> " + feature.geometry.coordinates[2] + "<br><b>Time:</b> " + new Date(feature.properties.time));
  },
// 
// Add entire geoJSON layer to map
}).addTo(earthquakes);
})
earthquakes.addTo(myMap);
var legend = L.control({position: 'bottomright'});
legend.onAdd = function () {
  var div = L.DomUtil.create('div', 'info legend'),
      depth = ["-10", "10", "30", "50", "70", "90"],
      color = ["green", "yellow", "blue", "orange", "red", "purple"];
  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < depth.length; i++) {
      div.innerHTML +=
          '<i style="background:' + colorDisplay(depth[i] ) + '"></i>' +
          depth[i] +(depth[i+1]?'&ndash;' + depth[i + 1] + '<br>' : '+');
  }
  return div;
};
legend.addTo(myMap);



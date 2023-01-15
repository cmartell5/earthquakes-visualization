# earthquakes-visualization
Earthquake data visualizations using HTML, CSS, JSON, Leaflet, D3 and JavaScript

# Background
The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. In this project, I have been tasked with developing a way to visualize USGS data that will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

# Project Outline
Create an Earthquake Visualization using an earthquake dataset from [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)
- When choosing a dataset, I will be given a JSON representation of the data.
- I will use the URL of this JSON to pull in the data for the visualization.
- Using leaflet, I will create a map that plots all the earthquakes from my dataset based on their longitude and latitude.
- My data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.
- I will include popups that provide additional information about the earthquake when its associated marker is clicked.
- I will create a legend that will provide context for my map data.

![image](https://user-images.githubusercontent.com/100399092/207763589-2b6b2062-09f3-4234-a54e-0c472e7cc19d.png)


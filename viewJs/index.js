"use strict";

function IndexController() {

  function initMap() {
    var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
    });

    var map = L.map('map', {
        scrollWheelZoom: false,
        center: [0,0],
        zoom: 2
    });

    map.addLayer(layer);
  }

  function init() {
    initMap();
  }

  //
  // Go!
  //
  init();

}

//
// Make the whole thing go
//
(new IndexController());

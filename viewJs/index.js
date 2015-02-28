"use strict";

function IndexController() {

  var lastPulse;

  setInterval(function() {
    $.getJSON("http://sensor-api.localdata.com/api/v1/sources/ci4tmxpz8000002w7au38un50/entries.geojson?count=1&sort=desc", function(d) {
      console.log(d);
    });
  }, 1000);

}

//
// Make the whole thing go
//
(new IndexController());

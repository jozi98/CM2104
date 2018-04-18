var mymap = L.map('mapid').setView([0, 0], 1);

var Esri_WorldGrayCanvas = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {attribution:'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ', maxZoom: 16 });

Esri_WorldGrayCanvas.addTo(mymap);

var OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <ahref="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'});

OpenTopoMap.addTo(mymap);


$('#shakey').click(function(){
  console.log("getting quakes");

  $.getJSON("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson", function(result) {
  console.log(result);

  result.features.forEach(function(quake){

    var lng = quake.geometry.coordinates[0];
    var lat = quake.geometry.coordinates[1];
    var mag = parseFloat(quake.properties.mag);
 // alert(mag*1000);

    var circle = L.circle([lat,lng],mag*10000,{
      color:'red',
      opacity:0,
      fillColor:'red',
      fillOpacity:0.8
    })
    circle.addTo(mymap);

  })
});

});

$('#droppey').click(function(){
  console.log("getting meteors");

  $.getJSON("https://data.nasa.gov/resource/gh4g-9sfh.json" , function(result){
  //  console.log(result[0].geolocation.latitude);
 var size;
 var lat2;
 var lng2;

    result.forEach(function(shower){
      if(shower.hasOwnProperty('mass')&&shower.hasOwnProperty('geolocation')){

         size = shower.mass;
         lat2 = shower.geolocation.latitude;
         lng2 = shower.geolocation.longitude;
      }


       var circle = L.circle([lat2,lng2],size,{
         color :'blue',
         opacity:0,
         fillColor:'blue',
         fillOpacity:0.8
      //console.log(shower);
    })
    circle.addTo(mymap);
    circle.addTo(mymap).bindPopup(shower.name);

});
});
});

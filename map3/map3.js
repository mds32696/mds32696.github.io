var map3 = L.map('map3').setView([39.112974, -94.671063], 4)
var stateslayer = L.layerGroup().addTo(map3)
var graybasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(map3)
var topobasemap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(map3)
var demographics = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'
var basemapsobject = {
  Topographic: topobasemap,
  Graymap: graybasemap
}
jQuery.getJSON(demographics, function (data) {
  var stylefunction = function (feature) {
    var avghouseholdsize = feature.properties.AVE_HH_SZ
    var colorstring = 'navy'
    if (avghouseholdsize < 2.528) { colorstring = 'red' }
    return {
      color: colorstring,
      weight: 0.5,
      opacity: 1.0,
      fillOpacity: 0.5
    }
  }
  var object = {
    style: stylefunction,
    onEachFeature: states
  }
  L.geoJSON(data, object).addTo(map3)
})
var states = function (feature, layer) {
  var name = feature.properties.STATE_NAME
  var avghouseholdsize = feature.properties.AVE_HH_SZ
  layer.bindPopup('Average household size of ' + name + ': ' + avghouseholdsize + '<br>National average: 2.528')
  stateslayer.addLayer(layer)
}
var layersobject = {
  'Average household size by state': stateslayer
}
L.control.layers(basemapsobject, layersobject).addTo(map3)

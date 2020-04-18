var newmap1 = L.map('newmap1').setView([50.911944, 0.4875], 6)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo(newmap1)
var center = L.marker([50.911944, 0.4875]).addTo(newmap1)
var polygon = L.polygon([
  [49.717425, -1.972100],
  [48.628118, -1.574761],
  [48.466294, -1.440178],
  [48.393188, 0.055563],
  [48.706738, 1.344488],
  [49.262555, 1.797590],
  [50.076657, 1.402082],
  [49.694411, 0.179853],
  [49.403952, 0.141401],
  [49.373029, -1.184402],
  [49.697439, -1.294266],
  [49.729406, -1.953445]
]).addTo(newmap1)
polygon.bindPopup('This polygon marks the approximate boundaries of the medieval Duchy of Normandy, in Northern France.')
center.bindPopup('This marker denotes the approximate location of the battlefield at Senlac Hill. The defending Anglo-Saxon army under the command of King Harold Godwinson held the steep hill to the north, while the Norman army under the command of Duke William assaulted from the south.')
var polyline = L.polyline([
  [49.270164, -0.239544],
  [49.733622, 0.062122],
  [49.861260, 0.708598],
  [50.818708, 0.372269],
  [50.911944, 0.4875],
  [51.123579, 1.312352],
  [51.273893, 1.074286],
  [51.393498, -1.341897],
  [51.596447, -1.127335],
  [51.759110, -0.597028],
  [51.499652, -0.133575]
]).addTo(newmap1)
polyline.bindPopup('This polyline of eleven points shows the exact route the invading Normans took towards London. ')

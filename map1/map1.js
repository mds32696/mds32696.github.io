var Hastings = L.map('Hastings Battlefield Map').setView([50.914750, 0.488450], 6)
L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png').addTo('Hastings Battlefield Map')
var 'Battle Site' = L.marker([50.914750, 0.488450]).addTo('Hastings Battlefield Map')
var 'Norman Invasion Route' = L.polygon([
  [50.859280, 0.600819],
  [50.815250, 0.353041],
  [51.499286, -0.125230]
]).addTo('Hastings Battlefield Map')
'Norman Invasion Route'.bindPopup('This polygon marks the route the Norman army took to the battlefield at Senlac Hill, near Hastings, during their invasion of England in October 1066.')
'Senlac Hill Battlefield'.bindPopup('This marker denotes the approximate location of the battlefield at Senlac Hill. The defending Anglo-Saxon army under the command of King Harold Godwinson held the steep hill to the north, while the Norman army under the command of Duke William assaulted from the south.')

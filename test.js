var sde = require('./')
var assert = require('assert')

var db = sde()

db.get("SELECT * FROM mapSolarSystems WHERE solarSystemID = ?", [31000005], function (err, system) {
  assert.ifError(err)
  console.log(system)
  assert.equal(system.solarSystemName, 'Thera')
  console.log('all good')
})

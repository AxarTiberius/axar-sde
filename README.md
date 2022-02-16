# axar-sde

Access to EVE Online Static Data Export (SDE) through Sqlite (Node.js)

## Usage

### Install

(Will download the latest SDE Sqlite dump from https://www.fuzzwork.co.uk/dump/latest/)

```
$ npm install --save axar-sde
```

### API

```js
var sde = require('axar-sde')
var assert = require('assert')

var db = sde()

// db is a Sqlite3 instance
// https://www.npmjs.com/package/sqlite3

db.get("SELECT * FROM mapSolarSystems WHERE solarSystemID = ?", [31000005], function (err, system) {
  assert.ifError(err)
  console.log(system)
  assert.equal(system.solarSystemName, 'Thera')
  console.log('all good')
})
```

Output:

```
{
  regionID: 11000031,
  constellationID: 21000324,
  solarSystemID: 31000005,
  solarSystemName: 'Thera',
  x: 7201177000000000000,
  y: 1534300000000000000,
  z: -9501332482538404000,
  xMin: 7321174000000000000,
  xMax: 7321180000000000000,
  yMin: 1533300000000000000,
  yMax: 1535300000000000000,
  zMin: -9394335000000000000,
  zMax: -9394329000000000000,
  luminosity: 0,
  border: 0,
  fringe: 0,
  corridor: 0,
  hub: 0,
  international: 0,
  regional: 0,
  constellation: null,
  security: -0.99,
  factionID: null,
  radius: 3112788232446.856,
  sunTypeID: 34331,
  securityClass: null
}
all good
```

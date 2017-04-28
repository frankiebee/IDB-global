const test = require('tape')
const DB = require('./index.js')
test('indexDb', function(t){
    t.plan(2)
    const db = new DB({key: 'test', initialState: {test: 42}})
    db.open()
    .then((data) => {
      t.equal(data.test, 42, 'open should return the persisted data')
    })
    .then(() => db.put({test: 43}))
    .then(() => db.get())
    .then((data) => t.equal(data.test, 43, 'data should have changed'))
    .then(() => t.end())
})

const MemStore = require('../../store/memstore')
const BaseModel = require('../../models/user')
const assert = require('assert')
const runner = require('../runner')

const store = new MemStore()
const model = new BaseModel(store)

runner([testEmail], function (err) {
  if (!err) {
    console.log('All done')
  }
})

describe('UserModel', function () {
  it('could get by email', testEmail)
})

function testEmail (done) {
  const testUser = {
    email: 'raimonfuns@163.com',
    nickname: 'raimonfuns',
    password: '1234'
  }
  model.create(testUser, function (err) {
    assert(!err)
    model.getByEmail('raimonfuns@163.com', function (err, user) {
      assert(!err)
      assert.equal(user.email, testUser.email)
      assert.equal(user.nickname, testUser.nickname)
      assert.equal(user.password, testUser.password)
      done()
    })
  })
}

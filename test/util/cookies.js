const assert = require('assert')
const cookie = require('../../utils/cookies')

describe('cookies', function () {
	it('should parse cookie', function () {
		var c = cookie.parse('foo=bar; foo1=bar1')
		assert.equal(c.foo, 'bar')
		assert.equal(c.foo1, 'bar1')
	})
})
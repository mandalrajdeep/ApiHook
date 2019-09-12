const expect = require('chai').expect
const nock = require('nock')

const getUser = require('../src/index').getUser
const response = require('./response')

describe('Get User Test', () => {
  beforeEach(() => {
    nock('https://api.rajdeepmandal.com')
      .get('/users/mandalrajdeep')
      .reply(200, response)
  })

  it('Get User by Valid Username', () => {
    return getUser('mandalrajdeep')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object')

        //Test result of name, and location for the response
        expect(response.name).to.equal('Rajdeep Mandal')
        expect(response.location).to.equal('Mumbai')
      })
  })

  it('Get User by Invalid Username (404 Handling)', () => {
    return getUser('jondoe')
      .then(response => {
        //expect an object back
        expect(typeof response).to.equal('object')

        //expect 404
        expect(response.status).to.equal(404)
      })
  })

})
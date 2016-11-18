let typee = require('./typee')
let sinon = require('sinon')

let chai = require('chai')
let assert = chai.assert
let expect = chai.expect

describe('typee', () => {
  describe('state', () => {
    it('should have initial state as 0', () => {
      expect(typee.state.state).to.equal(0)
    })

    it('should have initial text as null', () => {
      expect(typee.state.text).to.be.null
    })
  })

  describe('request', () => {
    beforeEach(() => {
      this.server = sinon.fakeServer.create()
    })

    afterEach(() => {
      this.server.restore()
    })

    it('should get text from server', () => {
      let callback = sinon.spy()
      typee.request(callback)

      let response = { id: 1, text: 'Provide examples', done: true }
      this.server.requests[0].respond(
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(response)
      )

      assert(callback.calledOnce)
      assert(callback.calledWith('success', response))
    })
  })
})

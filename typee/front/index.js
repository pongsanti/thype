var request = require('superagent')

var requestTypee = function () {
  request.get('/typee').end(function (err, res) {
    console.log(res)
  })
}

module.exports = requestTypee

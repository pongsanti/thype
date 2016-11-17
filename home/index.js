var path = require('path')
var express = require('express')
var router = express.Router()

// define the home page route
router.get('/', function (req, res) {
  res.render(path.join(__dirname, 'index'))
})

module.exports = router
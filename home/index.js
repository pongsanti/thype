var path = require('path')
var express = require('express')
let router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.render(path.join(__dirname, 'index'))
})

module.exports = router

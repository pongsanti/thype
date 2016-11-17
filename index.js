var path = require('path')
var express = require('express')
var app = express()

app.set('view engine', 'pug')

// business
var home = require('./home')
app.use('/', home)

// statics
app.use(express.static('public'))
app.use(express.static('bower_components/bulma'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

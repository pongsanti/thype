var path = require('path')
var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/welcome', function (req, res) {
  res.render('welcome', { title: 'Hey', message: 'Hello there!' })
})

app.use(express.static('public'))
app.use(express.static('bower_components/bulma'))

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

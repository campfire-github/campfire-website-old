require('dotenv').config()

var express = require('express')
var path = require('path')
var morgan = require('morgan')

var port = process.env.PORT || 8080
var app = express()

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
app.use(express.static('dist'))
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(port)
console.log('Listening on port ' + port)

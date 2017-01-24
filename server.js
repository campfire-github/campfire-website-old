require('dotenv').config()

const express = require('express')
const path = require('path')
const morgan = require('morgan')

const port = process.env.PORT || 8080
const app = express()

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
app.use(express.static('dist'))

app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.get('/api/v1/newsapi/', (request, response) => {
  
})

app.listen(port)
console.log('Listening on port ' + port)

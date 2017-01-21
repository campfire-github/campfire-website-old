require('dotenv').config()

import express from 'express'
import path from 'path'
import request from 'request'
import morgan from 'morgan'

const PORT = process.env.PORT || 8080
const app = express()

// setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))

// serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'dist')))

// always return the main index.html, so react-router render the route in the client
app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT)
console.log('Listening on port ' + PORT)

require('dotenv').config()

const express = require('express')
const path = require('path')
const morgan = require('morgan')
const request = require('request')

var pg = require('pg')
var connectionString = process.env.DATABASE_URL
var client = new pg.Client(connectionString)

client.connect()

const port = process.env.PORT || 8080
const app = express()

const url = 'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=' + process.env.API_KEY

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
app.use(express.static('dist'))

app.get('/v1/news', (req, res) => {
  request(url, (error, response, body) => {
    !error && response.statusCode === 200 ? res.send(body) : console.log(error)
  })
})

var requestLoop = setInterval(function(){
  var result = [] ;
  request(url, (error, response, body) => {
    if(!error && response.statusCode == 200){
         console.log('sucess!');
         result = body.articles ;

     }else{
         console.log('error' + response.statusCode);
     }
  })

}, 5000);

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(port)
console.log('Listening on port ' + port)

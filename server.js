require('dotenv').config()

const express = require('express')
const path = require('path')
const morgan = require('morgan')
const request = require('request')
const cors = require('cors')
const bodyParser = require('body-parser')

const pg = require('pg')
const connectionString = process.env.DATABASE_URL
const client = new pg.Client(connectionString)

client.connect()

const port = process.env.PORT || 8080
const app = express()

const corsOptions = { origin: '*' }
const url = 'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=' + process.env.API_KEY

app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
app.use(express.static('dist'))

app.get('/api/v1/news', (req, res) => (
  request(url, (error, response, body) => (!error && response.statusCode === 200 ? res.json(JSON.parse(body)) : console.log(error)))
))


var requestLoop = setInterval(function(){
  var result = [] ;
  request(url, (error, response, body) => {
    if(!error && response.statusCode == 200){
         console.log('sucess!');
         result = body.articles ;
     }else{
         console.log('error' + response.statusCode);
     }
     var query = client.query('INSERT INTO news (author,title,url,urlToImage,publishedAt)VALUES ($1,$2,$3,$4,$5)',[body.author,body.title,body.url,body.urlToImage,body.publishedAt]);
     query.on('err', function(err){
       console.log("CANT INSERT INTO NEWS TABLE " + err);
     });





  })
  console.log(result);
}, 5000);

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.get('*', (request, response) => (response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))))


app.listen(port)
console.log('Listening on port ' + port)

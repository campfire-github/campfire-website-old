require('dotenv').config()

const express = require('express')
const path = require('path')
const morgan = require('morgan')
const request = require('request')
const cors = require('cors')
const bodyParser = require('body-parser')
///*
const pg = require('pg')
const connectionString = process.env.DATABASE_URL
const client = new pg.Client(connectionString)
client.connect()
//*/
const port = process.env.PORT || 8080
const app = express()
const corsOptions = { origin: '*' }
const url = 'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=' + process.env.API_KEY
var urls = ['https://newsapi.org/v1/articles?source=entertainment-weekly&sortBy=top&apiKey=',
            'https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=',
            'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=' ,
            'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=',
            'https://newsapi.org/v1/articles?source=ign&sortBy=latest&apiKey=',
            'https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=',
            'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=',
            'https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey=',
            'https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey='

           ]
app.use(cors(corsOptions))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
app.use(express.static('dist'))

app.get('/api/v1/news', (req, res) => (
  request(url, (error, response, body) => (!error && response.statusCode === 200 ? res.json(JSON.parse(body)) : console.log(error)))
))

app.get('/api/v1/newsnow', function(req,res){
  var toreturn =  [] ;
  var query = client.query('SELECT * FROM newsnow');
  query.on('err',function(err){
    console.log("CAN NOT GET ANYTHING FROM NEWSNOW");
    res.status(404)
       .write('NOT FOUND');
  });
  query.on('row', function(result){
    toreturn.push(result);
  });
  query.on('end', function(){
    if(toreturn.length == 0){
      res.status(200)
      .write("OK BUT NO NEWS");
    }else {
      var json = JSON.stringify(toreturn);
      res.write(json);
    }
    res.end() ;
  });
});

var deleteAndInsert = function(){
  var deletequery = client.query('DELETE FROM newsnow');
   deletequery.on('err', function(err){
     console.log("CANT DELETE" + err);
   });//*/
   for (var index = 0 ; index < urls.length ;index++ ){
     var url1 = urls[index] + process.env.API_KEY  ;
     console.log(index+"-"+urls[index]) ;
     request(url1, (error, response, body) => {
       if(!error && response.statusCode == 200){
            var json =JSON.parse(body);
            for (var i = 0 ; i < json.articles.length ;i++){
              var query = client.query('INSERT INTO newsnow (author,title,url,urlToImage,publishedAt,source,description)VALUES ($1,$2,$3,$4,$5,$6,$7)',[json.articles[i].author,json.articles[i].title,json.articles[i].url,json.articles[i].urlToImage,json.articles[i].publishedAt, json.source, json.articles[i].description]);
              query.on('err', function(err){
                console.log("CANT INSERT INTO NEWS TABLE " + err);
              });
            }
        }else{
            console.log('error' + response.statusCode);
        }
     })
   }
}

var requestLoop = setInterval( function(){
  deleteAndInsert() ;
}, 1000000);

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.get('*', (request, response) => (response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))))


app.listen(port)
console.log('Listening on port ' + port)

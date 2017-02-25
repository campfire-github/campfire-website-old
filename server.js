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
var newsnow = [];
app.get('/api/v1/news', (req, res) => (
  request(url, (error, response, body) => (!error && response.statusCode === 200 ? res.json(JSON.parse(body)) : console.log(error)))
))

app.get('/api/v1/memorynewsnow', function(req,res){
  if(newsnow.length>0 ){
    res.status(200).write(JSON.stringify(newsnow));
  }else {
    res.status(404).write('NO NEWS FOUND');
  }
});
/*
app.get('/api/v1/newsnow', function(req,res){ //790 ms -> 1000 ms
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
*/
app.get('/api/v1/:news', function(req,res){
  const news = req.params.news ;
  var toreturn =  [] ; var query ;
  if(news === "newsnow"){
    query = client.query('SELECT * FROM newsnow ORDER BY publishedAt DESC LIMIT 90');
  }else {
    query = client.query('SELECT * FROM newsnow WHERE source = $1', [news]);
  }
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

app.get('/api/v1/weather', function (req, res){
  var toreturn = [ ] ;
  var query = client.query ('SELECT * FROM weather');
  query.on('err',function(err){
    console.log("CAN NOT GET ANYTHING FROM weather");
    res.status(404)
       .write('NOT FOUND');
  });
  query.on('row', function(result){
    toreturn.push(result);
  });
  query.on('end', function(){
    if(toreturn.length == 0){
      res.status(200)
      .write("OK BUT NO weather");
    }else {
      var json = JSON.stringify(toreturn);
      console.log( "returning "+ toreturn);
      res.write(json);
    }
    res.end() ;
  });
});


var weatherRequest = function(){
  var deletequery = client.query('DELETE FROM weather');
   deletequery.on('err', function(err){
     console.log("CANT DELETE" + err);
   });
  const weatherurl = "http://api.openweathermap.org/data/2.5/weather?q=wellington,nz&units=metric&APPID=440e3d0ee33a977c5e2fff6bc12448ee";
  const fivedayforcast = "http://api.openweathermap.org/data/2.5/forecast?q=wellington,nz&mode=json&units=metric&APPID=440e3d0ee33a977c5e2fff6bc12448ee";
  request(fivedayforcast, (error, response, body) => {
    if(!error && response.statusCode == 200){
        console.log("weather " + body);
        var json = JSON.parse(body);
        const cityname = json.city.name ;
        const cityid = json.city.id ;
        const countryname = json.country ;
        for ( var i=0; i<json.list.length ;i++ ){
          var each = {
            id : cityid ,
            city : cityname ,
            country: countryname,
            temp: json.list[i].main.temp,
            description :json.list[i].weather[0].description,
            icon : json.list[i].weather[0].icon,
            dt: json.list[i].dt,
            dtText : json.list[i].dt_txt,
            wind : json.list[i].wind.speed
          }
          var query = client.query('insert into weather (cityid,name,country,temp,description,icon,dt,dt_text,wind ) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)',[each.id,each.city,each.country,each.temp,each.description,each.icon,each.dt,each.dtText,each.wind]);
          query.on('err',function(err){
              console.log("CANT INSERT INTO weather " + err);
          })
        }
     }else{
         console.log('error' + response.statusCode);
     }
  })
}

var weatherloop = setInterval( function(){
  weatherRequest() ; //
}, 7500000); // every 2 hours 5 mn

var deleteAndInsertNewsnow = function(){
  var temp =[] ;
//  var deletequery = client.query('DELETE FROM newsnow');
  // deletequery.on('err', function(err){
    // console.log("CANT DELETE" + err);
  // });//*/
   for (var index = 0 ; index < urls.length ;index++ ){
     var url1 = urls[index] + process.env.API_KEY  ;
     //console.log(index+"-"+urls[index]) ;
     request(url1, (error, response, body) => {
       if(!error && response.statusCode == 200){
            var json =JSON.parse(body);
            for (var i = 0 ; i < json.articles.length ;i++){
              var each ={
                author: json.articles[i].author,
                title: json.articles[i].title,
                url:json.articles[i].url,
                urlToImage:json.articles[i].urlToImage,
                publishedAt:json.articles[i].publishedAt,
                source:json.source,
                description:json.articles[i].description
              }
              temp.push(each);
              const today  = new Date () ;
              var selectquery = client.query('SELECT COUNT(*) FROM newsnow WHERE url = $1', [each.url]);
              let count = 0  ;
              selectquery.on('err',function(err){ console.log("err in selecting : "+ err)})
              selectquery.on('row', function(res){
                if( res.count ==0){
                  var query = client.query('INSERT INTO newsnow (author,title,url,urlToImage,publishedAt,source,description,insertDate )VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',[json.articles[i].author,json.articles[i].title,json.articles[i].url,json.articles[i].urlToImage,json.articles[i].publishedAt, json.source, json.articles[i].description, today]);
                  query.on('err', function(err){
                    console.log("CANT INSERT INTO NEWS TABLE " + err);
                  });
                }
              //  console.log( "result " + res.count ) ;
              })
              // else {console.log("not inserting")}

            }
        }else{
            temp= [] ;
            console.log('error' + response.statusCode);
        }
        if(temp.length>0){
          newsnow= [] ;
          newsnow = temp ;
        }
     })
   }
}

var requestLoop = setInterval( function(){
  deleteAndInsertNewsnow() ;
}, 100000);

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.get('*', (request, response) => (response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))))
app.listen(port)
console.log('Listening on port ' + port)

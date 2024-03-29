require('dotenv').config()
const express = require('express')
const path = require('path')
const morgan = require('morgan')
const request = require('request')
const cors = require('cors')
const bodyParser = require('body-parser')
const webshot = require('webshot')
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
            'https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=',
            'https://newsapi.org/v1/articles?source=wired-de&sortBy=top&apiKey=',
            'https://newsapi.org/v1/articles?source=abc-news-au&sortBy=top&apiKey=',
            'https://newsapi.org/v1/articles?source=google-news&sortBy=top&apiKey=' ,
            'https://newsapi.org/v1/articles?source=the-telegraph&sortBy=latest&apiKey=',
            'https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=',
            'https://newsapi.org/v1/articles?source=espn&sortBy=top&apiKey=',
            'https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=',
            'https://newsapi.org/v1/articles?source=ign&sortBy=latest&apiKey=',
            'https://newsapi.org/v1/articles?source=time&sortBy=top&apiKey=',
            'https://newsapi.org/v1/articles?source=national-geographic&sortBy=top&apiKey=',
            'https://newsapi.org/v1/articles?source=hacker-news&sortBy=latest&apiKey=',
            'https://newsapi.org/v1/articles?source=mtv-news&sortBy=latest&apiKey=',
            'https://newsapi.org/v1/articles?source=new-scientist&sortBy=top&apiKey='
           ]
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'))
app.use(express.static('dist'));
var newsnow = [];
app.get('/api/v1/news', (req, res) => (
  request(url, (error, response, body) => (!error && response.statusCode === 200 ? res.json(JSON.parse(body)) : console.log(error)))
))



app.get('/api/v1/search/:keyword',function(req,res){
  const lowercase = req.params.keyword.toLowerCase()  ;
  const keyword1 = "%"+lowercase+"%";
  var toreturn =[]; var query ;
  var date = new Date() ;
  date.setDate(date.getDate() - 2);
  if(lowercase === "highlightnews"){//
    query = client.query('SELECT * FROM NEWSNOW WHERE highlight = true AND insertDate > $1 ORDER BY id DESC LIMIT 15 ',[date]);
  }else if (lowercase === "todaynews"){
    query = client.query('SELECT * FROM NEWSNOW WHERE insertDate >$1 ORDER BY id DESC LIMIT 400' , [date]);
  }
  else {
    query = client.query('SELECT * FROM NEWSNOW WHERE lower(title) like $1 ORDER BY id DESC limit 25',[keyword1]);
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
      var json = JSON.stringify("OK BUT NO NEWS");
      res.status(404)
      .write(json);
    }else {
      var json = JSON.stringify(toreturn);
      res.write(json);
    }
    res.end() ;
  });
});

app.post('/api/headlineUpdate', function(req,res){
  const id = req.body.id ;
  var error = 0 ;
  console.log("key" + Object.keys(req.body));
  var query = client.query('UPDATE newsnow SET highlight = true WHERE id =$1',[id]);
  query.on('err',function(err){
    error = -1 ;
    console.log("CAN NOT UPDATE highlight");
  });
  query.on('end', function(){
    if(error < 0){
      res.status(404)
         .write('NOT FOUND');
    }else {
      res.status(200)
         .write('DONE');
    }
    res.end() ;
  });

});
/*
app.post('/api/headlineUpdateAll', function(req,res){
  const idArray = req.body.dataArray ;
  var error = -1 ;
  var query;
  for( var i=0 ; i<idArray.length ; i++){
    var id = idArray[i].id ;
    query = client.query('UPDATE newsnow SET highlight = NOT highlight WHERE id =$1',[id]);
    query.on('err',function(err){
      error++ ;
      console.log("CAN NOT UPDATE highlight on id "+ id);
    });
    query.on('end', function(){
      if(error < 0){
        res.status(200)
           .write('DONE');
      }else {
        res.status(404)
           .write(JSON.stringify(error));
      }
      res.end() ;
    });
  }

});
*/
app.get('/api/headline/:id', function (req,res) {
  const id = req.params.id ;
  const idd = req.body.id ;

  console.log(Object.keys(req));
  console.log("key" + Object.keys(req.body));

  if (id < 2100){res.status(404).write('NOT FOUND');}
  else {res.status(200).write('OK 1 '+ idd);}
  res.end()  ;

});

app.get('/api/v1/:news/:news1/:news2/:count', function(req,res){

  const news = req.params.news ;
  const news1 = req.params.news1 ;
  const news2 = req.params.news2 ;
  const count = req.params.count ;
  var toreturn =  [] ; var query ;

  if(news === "newsnow"){
    query = client.query('SELECT nn.* FROM (SELECT n.*, ROW_NUMBER() OVER (PARTITION BY n.source ORDER BY n.id DESC) rn FROM newsnow n) nn WHERE nn.rn <=10 ORDER BY nn.id DESC ');
  }else {
    query = client.query('SELECT * FROM newsnow WHERE source = $1 or source = $2 or source = $3 ORDER BY id DESC LIMIT $4', [news, news1, news2,count]);
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
      res.status(404)
      .write("OK BUT NO NEWS");
    }else {
      var json = JSON.stringify(toreturn);
    //  console.log ( json );
      res.status(200)
          .write(json);
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


var insertNewsnow = function(){
   for (var index = 0 ; index < urls.length ;index++ ){
     var url1 = urls[index] + process.env.API_KEY  ;
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
              const today  = new Date () ;
              const unixtime = Date.parse(today)/1000;
              var query = client.query ('INSERT INTO newsnow (author,title,url,urlToImage,publishedAt,source,description,insertDate,unixTime) SELECT $1,$2,$3,$4,$5,$6,$7,$8,$11 WHERE NOT EXISTS (SELECT * FROM newsnow where url = $9 and source = $10)',
              [each.author,each.title,each.url,each.urlToImage,each.publishedAt, each.source, each.description, today,each.url, each.source,unixtime]);
              query.on('err', function(err){
                console.log("the error is + "+ err);
              });
            }
        }else{

        }

     })
   }

}

var shot = function(){
  webshot('campfire.news/sport', 'google1.png', function(err) {
      if(err){
        console.log(err) ;
      }
  });
  webshot('google.com', 'google.png', function(err) {
      if(err){
        console.log(err) ;
      }
  });
}
var shotloop = setInterval( function(){
  shot() ;
}, 10000);

var requestLoop = setInterval( function(){
  insertNewsnow() ;
}, 1000000);

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.get('*', (request, response) => (response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))))
app.listen(port)
console.log('Listening on port ' + port)

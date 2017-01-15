var express = require('express')
var path = require('path')
 var pg = require('pg')
 var connectionString = process.env.DATABASE_URL
var port = process.env.PORT || 8080
var app = express()
 var client = new pg.Client(connectionString)
//
 client.connect()

app.use(express.static('dist'))
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

/*
app.get('/1', function (req, res) {
  var date = new Date()
  client.query('INSERT INTO visits(date) VALUES($1)', [date])
  var query = client.query('SELECT COUNT(date) AS count FROM visits WHERE date = $1', [date])
  query.on('row', function (result) {
    console.log(result)
    if (!result) {
      return res.send('No data found');
    } else {
		console.log('vistit today ' + result.count)
      res.send('Visits today: ' + result.count)
    }
  })
})
*/

 app.get('/1', function (req,res) {
   console.log('in/1 function')
   var date = new Date()
   var result = 0
   client.query('INSERT INTO visits(date) VALUES($1)', [date])
   var query =  client.query('SELECT COUNT(date) AS count FROM visits WHERE date = $1', [date])
   query.on('err', function (err) {
     res.write('ERR')
     res.end()
   })
   query.on('row', function (result) {
     users.push(result)
   })
   query.on('end', function () {
     if (result == 0) {
       res.write("NO visitor")
     } else {
       res.write(result)
     }
     res.end()
   })
 })

app.listen(port)

console.log('Listening at http://localhost: ' + port)

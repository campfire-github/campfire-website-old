var pg = require('pg')
var connectionString = process.env.DATABASE_URL
var client = new pg.Client(connectionString)
var query = client.query('CREATE TABLE campfire (date date)')

client.connect()
query.on('end', function (result) { client.end() })

const pg = require('pg')
const connectionString = process.env.DATABASE_URL
const client = new pg.Client(connectionString)
const query = client.query('CREATE TABLE campfire (date date)')

client.connect()
query.on('end', (result) => {client.end()})

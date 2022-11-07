const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "bhatt1501",
    database: "etls"

    /*host: "Test",
    user: "doadmin",
    port: 25060,
    password: "AVNS_pr46S8-W01K6ngxvAFT",
    database: "etl"*/
   
})

module.exports = client
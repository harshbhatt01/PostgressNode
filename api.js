const client = require('./dbpg.js')
const express = require('express');
const app = express();

app.listen(3700, ()=>{
    console.log("Sever is now listening at port 3700");
})

client.connect();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/blocks/:blocks', (req, res)=>{
    client.query(`Select * from blocks`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/logs', (req, res)=>{
    client.query(`Select * from logs`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/token_transfers', (req, res)=>{
    client.query(`Select * from token_transfers`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/traces', (req, res)=>{
    client.query(`Select * from traces`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/transactions', (req, res)=>{
    client.query(`Select * from transactions`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})


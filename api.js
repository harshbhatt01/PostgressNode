const client = require('./dbpg.js')
const express = require('express');
const app = express();

app.listen(3700, ()=>{
    console.log("Sever is now listening at port 3700");
})

client.connect();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//get block by block number
app.get('/blocks/:number', (req, res)=>{
    client.query(`Select * from blocks where number = ${req.params.number}`, (err, result)=>{
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

//get token transfer from particular token address
app.get('/token_transfers/:token_address', (req, res)=>{
    client.query(`Select * from token_transfers where token_address = '${req.params.token_address}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})



//get transaction by transaction hash
app.get('/transactions/:hash', (req, res)=>{
    client.query(`Select * from transactions where hash = '${req.params.hash}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

//outgoing transactions
app.get('/transactions/add/:from_address', (req, res)=>{
    client.query(`Select * from transactions where from_address = '${req.params.from_address}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

//incoming transactions
app.get('/transactions/add/:to_address', (req, res)=>{
    client.query(`Select * from transactions where to_address = '${req.params.to_address}'`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

/*app.get('/traces', (req, res)=>{
    client.query(`Select * from traces`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})*/


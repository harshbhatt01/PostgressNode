const client = require('./dbpg.js')
const express = require('express');
const app = express();

app.listen(3700, ()=>{
    console.log("Sever is now listening at port 3700");
})

client.connect();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/hb', (req, res)=>{
    client.query(`Select * from hb`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/hb/:id', (req, res)=>{
    client.query(`Select * from hb where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/hb', (req, res)=> {
    const hb = req.body;
    let insertQuery = `insert into hb(id, fname, lname) 
                       values(${hb.id}, '${hb.fname}', '${hb.lname}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
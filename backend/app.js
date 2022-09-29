const { create } = require('domain');
const express = require('express');
const { url } = require('inspector');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:''
});

//connect
db.connect(( err )=> {
    if(err){
        throw err;
    }
    console.log("Connection established");
});
const app = express();


// create db
app.get('/createdb', (req,res) => {
    let sql = 'CREATE DATABASE nodedb ';
    db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('database created');
    });
});

app.listen('8080',() =>{
    console.log("server started on port 3000");
})
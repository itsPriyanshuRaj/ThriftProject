var express = require('express');
var ejs = require('ejs');
var mysql =  require('mysql');


mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: 'thrift'
})

var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(8080);

app.get('/', function(req,res){

    var con = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: '',
        database: 'thrift'
    })

    con.query("SELECT * FROM customer", (err,result)=>{
        res.render('pages/index',{return:res});
    })

});
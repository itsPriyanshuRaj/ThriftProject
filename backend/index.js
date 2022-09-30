var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createPool({
  connectionLimit: 100,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'thrift'
});


app.get('/', function (req, res) {
  //about mysql
  connection.getConnection(function (error, tempCont) {

    if (!!error) {
      tempCont.release();
      console.log("Error");
    } else {
      console.log("Connected with database");


      tempCont.query(`SELECT * FROM product`, function (error, rows, fields) {
        tempCont.release();
        if (!!error) {
          console.log("Error in the query");
        } else {
          res.json(rows);
        }
      })
    }
  });


  // connection.query(`SELECT * FROM product`, function(error,rows,fields){
  //   if(!!error){
  //     console.log("Error in the query");
  //   } else{
  //     console.log("Successfull query");
  //     console.log(rows);
  //   }
  // });
})
app.listen(8080);
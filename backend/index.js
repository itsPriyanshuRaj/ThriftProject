const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var port = 3000
var routerCategory = require('./routes/category');


app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use(bodyParser.json());
app.use('./routes/category', routerCategory);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
})







// var mysql = require('mysql');
// var connection = mysql.createPool({
//   connectionLimit: 100,
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'thrift'
// });

// app.get('/', function (req, res) {
//   //about mysql
//   connection.getConnection(function (error, tempCont) {

//     if (!!error) {
//       tempCont.release();
//       console.log("Error");
//     } else {
//       console.log("Connected with database");


//       tempCont.query(`SELECT * FROM product`, function (error, rows, fields) {
//         tempCont.release();
//         if (!!error) {
//           console.log("Error in the query");
//         } else {
//           res.json(rows);
//         }
//       })
//     }
//   });
// })

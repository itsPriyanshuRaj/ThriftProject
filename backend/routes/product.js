var db = require('./db');
var utils = require('./utils');
var express = require('express');
var multer = require('multer');
var { request, response } = require('express');

var router = express.Router();

var upload = multer ({dest:'images'});

router.get('/', (request,response)=>{
    var connection = db.connect()

    var statement = `SELECT * FROM products`
    connection.query(statement, (error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})


//post method
router.post('/', upload.single('image'), (request,response)=>{
    var file = request.file.filename;
    var {ProductID,Name,Description,Price,Category,Image} = request.body;

    var connection = db.connect();
    var statement = `INSERT INTO product (ProductID, Name, Description, Price, Category, Image)  values('${ProductID}', ${Name}, ${Description}, ${Price}, ${Category}, '${Image}'`

    connection.query(statement, (error,data) => {
        connection.end()
        response.send(utils.createResult(error,data))
    })
})
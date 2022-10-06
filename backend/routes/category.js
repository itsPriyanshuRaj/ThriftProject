var express = require('express');
var utils = require('../utils');
var db = require('./../db');
var router = express.Router();


router.post('/',function(request,response){

    var {C_Name} = request.body;
    var connection = db.connect1();
    var statement = `INSERT INTO category (C_Name) VALUE ("${C_Name}"),NOW())`;
    db.query(statement, function(err,result){
        if(err) throw err;
        else{
            connection.end();
            res.send(utils.createResult(err,result));
        }
    })
});


module.exports = router;
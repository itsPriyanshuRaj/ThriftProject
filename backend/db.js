var mysql = require('mysql')

function connect1()
{
    var connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password: '',
        database: 'thrift'
    })

    connection.connect()
    return connection
}

module.exports = {
    connect1: connect1
}
'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'cheru',
  database : 'testdb'
});

connection.connect();

module.exports = connection;

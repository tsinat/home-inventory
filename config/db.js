'use strict';

var mysql = require('mysql');

var db = mysql.createConnection(process.env.JAWSDB_URL || {
  host     : 'localhost',
  user     : 'root',
  password : 'cheru',
  database : 'testdb'
});

connection.connect();

db.query(`create table if not exists rooms(id int primary key auto_increment, name text)`);
db.query(`create table if not exists items(id int primary key auto_increment, name text, value int, category text, rooms int)`);
module.exports = connection;

'use strict';

var db = require('../config/db');

exports.findAll = function(req, cb){

    db.query("select * from rooms", function(err, rooms ){
        if(err){
            console.log(err);
        }
        cb(null, rooms);
    })
};
exports.create = function(req, cb){
    console.log("THIS", req);
    db.query('insert into rooms (name) value (?)', req.name, function(err, room, third){
        console.log("ROOM", room);
        if(err){
            console.log(err);
        }
        var last = db. query('SELECT * FROM rooms ORDER BY  id DESC LIMIT 1');
        console.log('last:',last)
        cb(null, req);
    });
}
exports.delete = function(id, cb){
    console.log("id:", id);
    db.query('delete from rooms where id=?', id, function(err, room){
        if(err){
            console.log(err)
        }
        cb(null, room);
    })
}
exports.edit =  function(id, name, cb){
    console.log('id:', id);
    db.query('update rooms set name = ? where id = ?',[name, id] , function(err, room){
        if(err){
            console.log(err);
        }
        cb(room);
    } )
}

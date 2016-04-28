'use strict';

var db = require('../config/db');



exports.findAll = function(req, cb){
    console.log('item is being routed');
    db.query("select * from items", function(err, items ){
        if(err){
            console.log(err);
        }
        cb(null, items);
    })
};
exports.create = function(req, cb){
    console.log("THIS", req);
    db.query('insert into items (name, value, category, room) value (?,?,?,?)', [req.name, req.value, req.category, req.room], function(err, item){
        console.log("ROOM", item);
        if(err){
            console.log(err);
        }
        cb(null, item);
    });
}
exports.delete = function(id, cb){
    console.log("id:", id);
    db.query('delete from items where id= ?', id, function(err, item){
        if(err){
            console.log(err)
        }
        cb(null, item);
    });
}
exports.edit =  function(id, name, cb){
    console.log('id:', id);
    db.query('update items set name = ? where id = ?',[name, id] , function(err, item){
        if(err){
            console.log(err);
        }
        cb(item);
    });
}

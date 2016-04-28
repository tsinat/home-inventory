'use strict';

var express = require('express');
var router = express.Router();

var Room = require('../models/room');

router.get('/', (req,res) =>{
    console.log('items is routing');
    Room.findAll(req, (err, items) =>{
        if(err){
            console.log('andy sucks!!');
        }
        console.log("routing works:", items);
        res.render('rooms', {messages: items})
    })
    });

router.post('/', (req,res) =>{
    console.log("THAT", req.body);
    Room.create(req.body, (err, room) =>{
        if(err){
            console.log(err);
        }
        res.send(room);
    })

});
router.delete('/:id', (req, res) =>{
    console.log(req.params.id);
    Room.delete(req.params.id, (err, room) =>{
        if(err){
            console.log(err);
        }
        res.send(room)
    })
});
router.put('/:id', (req,res) =>{
    Room.edit(req.params.id, req.body.name, (err, room) =>{
        if(err){
            console.log(err);
        }
        res.send(room);
    })
})
module.exports = router;

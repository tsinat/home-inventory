'use strict';

var express = require('express');
var router = express.Router();

var Item = require('../models/item');


router.get('/', (req,res) =>{
    console.log('items is routing');
    Item.findAll(req, (err, items) =>{
        if(err){
            console.log('andy sucks!!');
        }
        console.log("routing works");
        res.render('items',{ messages:items});
        // res.send(items);
    })
    });

router.post('/', (req,res) =>{
    Item.create(req.body, (err, item) =>{
        if(err){
            console.log(err);
        }
        res.send(item);
    })

});
router.delete('/:id', (req, res) =>{
    Item.delete(req.params.id, (err, item) =>{
        if(err){
            console.log(err);
        }
        res.send(item)
    })
});
router.put('/:id', (req,res) =>{
    Item.edit(req.param.id, (err, item) =>{
        if(err){
            console.log(err);
        }
        res.send(item);
    })
})
module.exports = router;

'use strict';

const PORT = process.env.PORT || 5000;
//requires: loading libraries

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var Room = require('./models/room');
var Item = require('./models/item');

var app = express();

//general purpose middleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'jade');


app.use('/rooms', require('./routes/rooms'));
app.use('/items', require('./routes/items'));

app.get('/', (req, res, next) =>{
    // res.send('home page will go here')
    res.render('index');
});




app.use((req, res, next) => {
    res.status(404).send('The file does not exist');
})

//create server, and listen to PORT
app.listen(PORT, err => {
    console.log(err || `server listening on port ${PORT}`);
})

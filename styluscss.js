const express = require('express');
const http = require('http');
const stylus = require('stylus');

var app = express();

app.use(stylus.middleware(process.argv[3]));

app.use(express.static(process.argv[3]));
/*
app.get('/main.css', function(request, response) {  
});*/

app.listen(process.argv[2]);

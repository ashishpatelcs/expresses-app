const express = require('express');
const http = require('http');
const pug = require('pug');

var app = express();

app.set('views', process.argv[3]);
app.set('view engine', 'pug');

app.all('/home', function(request, response) {
  response.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);

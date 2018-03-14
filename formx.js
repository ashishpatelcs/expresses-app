const express = require('express');
const http = require('http');
const pug = require('pug');
const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(request, response) {
  var str = request.body.str;
  response.end(str.split('').reverse().join(''));
});

app.listen(process.argv[2]);

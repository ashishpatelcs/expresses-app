const express = require('express');
const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.urlencoded({ extended: true }));

app.get('/search', function(request, response) {
  var query = (request.query);
  response.send(query);
});

app.listen(process.argv[2]);

const express = require('express');
const crypto = require('crypto');

var app = express();

app.put('/message/:id', function(request, response) {
  var id = request.params.id;
  response.end(crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex'));
});

app.listen(process.argv[2]);

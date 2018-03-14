const express = require('express');
const fs = require('fs');

fs.readFile(process.argv[3], FileReader);

var bookobj = {};

function FileReader(err, data) {
  if (err) console.log("File System Read Failed!");
  else {
	bookobj = JSON.parse(data);
  }
}

var app = express();

app.get('/books', function(request, response) {
  response.json(bookobj);
});

app.listen(process.argv[2]);

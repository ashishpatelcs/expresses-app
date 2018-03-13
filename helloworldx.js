const express = require('express');
const http = require('http');

var app = express();

app.all('/home', function(request, response) {
	response.end("Hello World!");
});

app.listen(process.argv[2]);

var express = require('express');
var logfmt = require("logfmt");
var http = require('http');
var gzippo = require('gzippo');
var app = express();

app.use(gzippo.staticGzip('' + __dirname));
app.use(logfmt.requestLogger());

var server = http.createServer(app);
server.listen(process.env.PORT || 5000);
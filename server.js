var express = require('express');
var serveStatic = require('serve-static');
var enforce = require('express-sslify');

let app = express();

app.use(enforce.HTTPS({ trustProtoHeader: true }));

app.use(serveStatic(__dirname + "/dist"));

var port = process.env.PORT || 5000;

app.listen(port);

console.log('server started '+ port);
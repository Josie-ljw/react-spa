var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

// post need it .....
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/login', function (req, res) {
  fs.readFile(__dirname + '/' + 'login.json', 'utf8', function (err, data) {
    res.end(data);
  });
})

app.post('/share/add', function (req, res) {
  fs.readFile(__dirname + '/' + 'login.json', 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
})

var server = app.listen(8082, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
})
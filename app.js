var http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser');
    fs = require('fs');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/form.html');
});
app.get('/form.css', function(req, res) {
  res.sendFile(__dirname + '/form.css');
});
app.get('/form.js', function(req, res) {
  res.sendFile(__dirname + '/form.js');
});
app.get('/jQuery.min.js', function(req, res) {
  res.sendFile(__dirname + '/jQuery.min.js');
});
app.get('/uikit.min.css', function(req, res) {
  res.sendFile(__dirname + '/uikit.min.css');
});
app.post('/', function(req, res) {
  var str = '';
  for (i in req.body)
    str += req.body[i] + ',';
  str = str.slice(0, str.length - 1) + '\n';
  console.log(str);
  fs.appendFile(__dirname + '/data/out.csv', str, function(err) {
    if(err) {
      console.log(err);
    }
    res.send('发送成功');
  });
  
});
app.listen(3000, function() {
  console.log('At port 3000');
});
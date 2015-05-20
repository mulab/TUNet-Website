var http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser');
    fs = require('fs'),
    exec = require('child_process').exec;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

function check(data) {
  console.log(data);
  var name = data["name"];
  var account = data["account"];
  var school = data["school"];
  var phone = data["phone"];
  var email = data["email"];
  var address = data["address"];
  var room = data["room"];

  var invalid = false;

  if (name.length > 20 || name.length < 1) {
    invalid = true;
  }

  // account validation
  if (account.match(/\d*/g) === null || account.match(/\d*/g).length === 2) {
    invalid = true;
  } else if (account.match(/([A-z]|\d)*/g) === null || account.match(/([A-z]|\d)*/g).length !== 2) {
    invalid = true;
  }

  // school validation
  if (school == 0) {
    invalid = true;
  }

  // phone number validation
  if (phone.match(/\d{11}/g) === null || phone.match(/\d{11}/g).length !== 1) {
    invalid = true;
  }

  return !invalid;
}

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
app.get('/count', function(req, res) {
  exec('wc -l data/out.csv', function (error, results) {
    res.send(results);
})

});
app.post('/', function(req, res) {
  if (!check(req.body)) {
    res.send("信息错误");
  } else {
    var str = '';
    for (i in req.body)
      str += req.body[i] + ',';
    str = str.slice(0, str.length - 1) + '\n';
    fs.appendFile(__dirname + '/data/out.csv', str, function(err) {
      if(err) {
        console.log(err);
      } else {
      res.send('发送成功');
      }
    });
  }
});
app.listen(3000, function() {
  console.log('At port 3000');
});
// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  const date = new Date();
  res.render(__dirname + '/views/index.html', {
    projectUrl: 'https://boilerplate-project-timestamp.djessa.repl.co',
    utc: date.toUTCString(),
    unix: date.getTime(),
    sortDate: date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate()
  });
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

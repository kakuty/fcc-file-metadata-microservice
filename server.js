// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer  = require('multer')
var upload = multer({ dest: '.data/' })

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/get-file-size', upload.single('file'), function (req, res, next) {
  res.send({
    size: req.file.size
  });
})

// Custom 404
app.get("*", function (request, response) {
  response.send('Page not found');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

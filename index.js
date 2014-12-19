// App
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Models
app.models = {};
app.models.Tractor = require('./models/tractor.js');

// Routes
require('./routes/routes.js')(app);

// Views
app.set('view engine', require('jade'));
app.set('views', __dirname + '/views');

// Assets
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Server
app.listen(3000, function() {
  console.log("Server running on port 3000");
});

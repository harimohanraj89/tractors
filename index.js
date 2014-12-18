// App
var express = require('express');
var app = express();

// Routes
require('./routes/routes.js')(app);

// Views
app.set('view engine', require('jade'));
app.set('views', __dirname + '/views');

// Assets

app.use(express.static(__dirname + '/public'));

// Server
app.listen(3000, function() {
  console.log("Server running on port 3000");
});

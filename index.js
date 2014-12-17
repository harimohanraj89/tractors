// App
var express = require('express');
var app = express();

// Routes
require('./routes/routes.js')(app);

// Server
app.listen(3000, function() {
  console.log("Server running on port 3000");
});

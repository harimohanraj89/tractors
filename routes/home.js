module.exports = function(app) {
  app.get('/', function(req, res) {
    res.send("Hi there, home page for tractors");
  });
}

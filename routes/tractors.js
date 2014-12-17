module.exports = function(app) {
  app.get('/tractors', function(req, res) {
    res.send("Tractors index page");
  });

  app.get('/tractors/new', function(req, res) {
    res.send("Tractors new page");
  });

  app.get('/tractors/:id', function(req, res) {
    res.send("Tractors show page: " + req.params.id);
  });

  app.get('/tractors/:id/edit', function(req, res) {
    res.send("Tractors edit page: " + req.params.id);
  });
};

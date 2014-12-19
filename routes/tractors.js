module.exports = function(app) {
  app.get('/tractors', function(req, res) {
    res.render("tractors/index.jade");
  });

  app.get('/tractors/new', function(req, res) {
    res.render("tractors/new.jade");
  });

  app.get('/tractors/:id', function(req, res) {
    var tractor = app.models.Tractor.find(req.params.id);
    res.render("tractors/show.jade", tractor.toJSON());
  });

  app.post('/tractors', function(req, res) {
    app.models.Tractor.create({
      model: req.body.model,
      price: req.body.price
    });
    console.log(app.models.Tractor.STORE);
    console.log(app.models.Tractor.NEXT_ID);
    res.send("You tried to create a tractor.\n" +
             "Model: " + req.body.model + "\n" +
             "Price: " + req.body.price + "\n");
  });

  app.get('/tractors/:id/edit', function(req, res) {
    res.render("tractors/edit.jade");
  });
};

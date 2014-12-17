module.exports = function(app) {
  require('./home.js')(app);
  require('./tractors.js')(app);
};

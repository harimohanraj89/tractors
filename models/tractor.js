var Tractor = function(params) {
  this.id = params.id;
  this.model = params.model;
  this.price = params.price;
};

Tractor.find = function(id) {
  var data = Tractor.STORE[id];
  if (data) {
    return new Tractor(data);
  }
};

Tractor.create = function(params) {
  tractor = new Tractor(params);
  tractor.id = Tractor.NEXT_ID;
  Tractor.NEXT_ID++;
  Tractor.STORE[tractor.id] = tractor.toJSON();
};

Tractor.prototype.toJSON = function() {
  return {
    id: this.id,
    model: this.model,
    price: this.price
  };
};

Tractor.STORE = {};
Tractor.NEXT_ID = 1;

module.exports = Tractor;

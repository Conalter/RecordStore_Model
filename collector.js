var Collector = function(name, wallet) {
  this.name = name;
  this.wallet = wallet;
  this.collection = [];
}

Collector.prototype.hasRecord = function(stock) {
  return this.collection.push(stock);
}

module.exports = Collector;

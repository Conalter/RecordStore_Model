var Collector = function(name, wallet) {
  this.name = name;
  this.wallet = wallet;
  this.collection = [];
}

Collector.prototype.buysRecord = function(stock) {
  this.collection.push(stock);
  // this.wallet -= stock.price;
};

Collector.prototype.sellsRecord = function() {
  this.collection.pop();
  // this.wallet += stock.price;
};

// Collector.prototype.changeWallet

module.exports = Collector;

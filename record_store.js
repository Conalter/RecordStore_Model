var Record_Store = function(){
  this.name = "Goldrush Records";
  this.city = "Perth";
  this.balance = 1000;
  this.inventory = [];
};

Record_Store.prototype.addStock = function (stock) {
  this.inventory.push(stock);
}

Record_Store.prototype.listInventory = function () {
  return this.inventory.map(function(stock) {
    return stock.info();
  });
}

module.exports = Record_Store;

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

Record_Store.prototype.getShopBalance = function() {
  return this.balance();
}

Record_Store.prototype.getStockValue = function() {
  return this.inventory.reduce(function(sum, stock){
    return sum + stock.price;
  }, 0);
  // return `Stock Value: ${stock.price}`;
}

module.exports = Record_Store;

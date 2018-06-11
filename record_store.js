var Record_Store = function(store_name, city, balance){
  this.store_name = store_name;
  this.city = city;
  this.balance = balance;
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

// Record_Store.prototype.getStockValue = function() {
//   return this.inventory.reduce(function(sum, stock){
//     return sum + stock.price;
//   }, 0);
// }

Record_Store.prototype.getStockValue = function() {
  const total = this.inventory.reduce(function(sum, stock){
    return sum + stock.price;
  }, 0);
  return `Stock Value: ${total}`;
}

Record_Store.prototype.findGenre = function(genre) {
  return this.inventory.find(stock => stock.genre === genre);
}

Record_Store.prototype.RecordStoreSellStock = function(stock) {
  this.balance += stock.price;
};

Record_Store.prototype.RecordStoreBuyStock = function(stock) {
  this.balance -= stock.price;
};

Record_Store.prototype.RecordStoreReduceInventory = function(stock) {
  this.inventory.pop(stock);
};

// RecordStore.prototype.sellRecord = function (stock) {
//  let index = this.inventory.indexOf(stock);
//  if (index !== -1) {
//  this.inventory.splice(index, 1);
//    } this.balance += record.price;
//  };

module.exports = Record_Store;

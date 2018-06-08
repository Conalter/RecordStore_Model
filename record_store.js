var Record_Store = function(){
  this.name = "Goldrush Records";
  this.city = "Perth";
  this.balance = 1000;
  this.inventory = [];
};

Record_Store.prototype.addStock = function (stock) {
  this.inventory.push(stock);
}

module.exports = Record_Store;

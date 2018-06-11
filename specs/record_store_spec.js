var assert = require('assert');
var Record_Store = require('../record_store.js');
var Stock = require('../stock.js');
var Collector = require('../collector.js');

describe('Record_Store', function() {

  var stock1;
  var stock2;
  var stock3;
  var stock4;
  var stock5;
  var record_store;
  var collector1;
  var collector2;

  beforeEach(function() {
    record_store = new Record_Store("Gold Rush Records", "Perth", 1000 );

    stock1 = new Stock("Atoms For Peace", "AMOK", "indie-rock", 20);
    stock2 = new Stock("Thom Yorke", "The Eraser", "indie-rock", 20);
    stock3 = new Stock("Radiohead", "Pablo Honey", "indie-rock", 10);
    stock4 = new Stock("Johnny Greenwood", "There Will Be Blood OST", "soundtrack", 20);
    stock5 = new Stock("Philip Selway", "Weatherhouse", "indie-rock", 20);

    collector1 = new Collector("Big Daddy Kane", 60);
    collector2 = new Collector("Super Upul", 100);

    record_store.addStock(stock1);
    record_store.addStock(stock2);
    record_store.addStock(stock3);
    record_store.addStock(stock4);
    record_store.addStock(stock5);
  })

  it("should add records to the inventory", function(){
    assert.strictEqual(record_store.inventory.length, 5);
  });

  it("should print out the Record's properties as a string", function() {
    assert.strictEqual(stock1.info(), "Artist: Atoms For Peace, Title: AMOK, Genre: indie-rock, Price: 20");
  });

  it("should print a method that lists the inventory", function() {
    assert.deepStrictEqual(record_store.listInventory(), [stock1.info(), stock2.info(), stock3.info(), stock4.info(), stock5.info()]);
  });

  it("should report financial situation of the shop (balance)", function() {
    assert.strictEqual(record_store.balance, 1000);
  });

  it("should report financial situation of the shop (stock value)", function() {
    assert.strictEqual(record_store.getStockValue(), "Stock Value: 90")
  });

  it("should show all records of a given genre", function() {
    assert.strictEqual(record_store.findGenre("soundtrack"), stock4);
  });

  it("should show the store's balance increased after transaction", function() {
    record_store.RecordStoreSellStock(stock1);
    assert.strictEqual(record_store.balance, 1020);
  });

  it("should show the store's balance decreased after transaction", function() {
    record_store.RecordStoreBuyStock(stock1);
    assert.strictEqual(record_store.balance, 980);
  })

  // it("should show that the collector has bought a record", function() {
  //   assert.strictEqual(collector1.buysRecord.length, 1);
  //   assert.strictEqual(collector1.sellsRecord.length, 0);
  // });

  // it("should show that the collector has bought a record", function() {
  //   collector1.buysRecord();
  //   assert.strictEqual(collector1.wallet, 40);
  // });

  // it("should show that the collector has sold a record", function() {
  //   assert.strictEqual(collector2.buysRecord.length, 1);
  //   assert.strictEqual(collector2.sellsRecord.length, 0);
  // });

  // it("should show that the collector has bought the record", function() {
  //   assert.strictEqual(record_store.sellRecord() {
  //     collector1.hasRecord.length, 1);
  //     record_store.inventory.length, 4);
  //   });
  // })



});

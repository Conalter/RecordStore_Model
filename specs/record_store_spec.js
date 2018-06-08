var assert = require('assert');
var Record_Store = require('../record_store.js');
var Stock = require('../stock');

describe('Record_Store', function() {

  var stock1;
  var stock2;
  var stock3;
  var stock4;
  var stock5;
  var record_store;

  beforeEach(function() {
    stock1 = new Stock("Atoms For Peace", "AMOK", "indie-rock", 20);
    stock2 = new Stock("Thom Yorke", "The Eraser", "indie-rock", 20);
    stock3 = new Stock("Radiohead", "Pablo Honey", "indie-rock", 10);
    stock4 = new Stock("Johnny Greenwood", "There Will Be Blood OST", "soundtrack", 20);
    stock5 = new Stock("Philip Selway", "Weatherhouse", "indie-rock", 20);
    record_store = new Record_Store();
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

});

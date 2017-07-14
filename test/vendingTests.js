const request = require("supertest");
const assert = require("assert");
const app = require('../app.js');
const customerRouter = require('../customerRouter.js');
const vendorRouter = require('../vendorRouter.js');

describe("GET /api/customer/items", function(){
  it("should return all the items in the vending machine", function(done){
    request(app)
      .get("/api/customer/items")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function(res){
        assert.equal(res.body.status, "success");
        assert.equal(res.body.data[1].id, 1);
        assert.equal(res.body.data[1].description, "chips");
        assert.equal(res.body.data[1].cost, 45);
        assert.equal(res.body.data[1].quantity, 10);
        assert.equal(res.body.data[0].id, 2);
        assert.equal(res.body.data[0].description, "candy");
        assert.equal(res.body.data[0].cost, 25);
        assert.equal(res.body.data[0].quantity, 17);
      })
      .end(done);
  })
})

describe("GET /api/vendor/purchases", function(){
  it("should return all the the purchases made", function(done){
    request(app)
      .get("/api/vendor/purchases")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function(res){
        assert.equal(res.body.status, "success");
        assert.equal(res.body.data[0].item, "chips");
        assert.equal(res.body.data[1].item, "chips");
        assert.equal(res.body.data[2].item, "chips");
        assert.equal(res.body.data[3].item, "candy");
        assert.equal(res.body.data[4].item, "candy");
        assert.equal(res.body.data[5].item, "candy");
      })
      .end(done);
  })
})

describe("GET /api/vendor/money", function(){
  it("should return all the total money in vending machine", function(done){
    request(app)
      .get("/api/vendor/money")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function(res){
        assert.equal(res.body.status, "success");
        assert.equal(res.body.data.moneyInMachine, 210);
      })
      .end(done);
  })
})

describe("POST api/vendor/items", function(){
  it("should return the new item added to the vending machine", function(done){
    request(app)
      .post("/api/vendor/items")
      .expect(200)
      .expect("Content-Type", "application/json; charset=utf-8")
      .expect(function(res){
        // assert.equal(res.body.status, "success");
        assert(res.body.id);
        assert(res.body.description);
        assert(res.body.cost >= 0);
        assert(res.body.quantity >= 0);
      })
      .end(done);
  })
})

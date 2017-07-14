const express = require('express');
const customerRouter = express.Router();
const Item = require('./models/item.js');
const Purchase = require('./models/purchase.js')

customerRouter.get('/', function(req, res){
  res.send("this is the customer api");
});

customerRouter.get('/items/', function(req, res){
  res.send("should get a list of items");
});

customerRouter.post('/items/:itemId/purchases', function(req, res){
  let itemId = req.params.itemId;
  //should purchase an item
})

module.exports = customerRouter;

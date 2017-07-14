const express = require('express');
const vendorRouter = express.Router();
const Item = require('./models/item.js');
const Purchase = require('./models/purchase.js')

vendorRouter.get('/', function(req, res){
  res.send("this is the vendor api");
});

vendorRouter.post('/items/', function(req, res){
  //add a new item not previously existin in the machine
});
vendorRouter.put('/items/:itemId', function(req, res){
  //update item quantity description and cost
})
vendorRouter.get('/purchases/', function(req, res){
  res.send("vendor purchases api");
});
vendorRouter.get('/money/', function(req, res){
  res.send("vendor money api");
})



module.exports = vendorRouter;

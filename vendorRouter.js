const express = require('express');
const vendorRouter = express.Router();
const itemsAvailable = require('./models/itemsAvailable');
const purchases = require('./models/purchases')

vendorRouter.get('/', function(req, res){
  res.send("this is the vendor api");
});

vendorRouter.get('/items/', function(req, res){
  res.send("should get a list of items");
});
vendorRouter.get('/purchases', function(req, res){
  res.send("vendor purchases api");
});
vendorRouter.get('/money', function(req, res){
  res.send("vendor money api");
})



module.exports = vendorRouter;

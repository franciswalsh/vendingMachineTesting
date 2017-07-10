const express = require('express');
const customerRouter = express.Router();
const itemsAvailable = require('./models/itemsAvailable');
const purchases = require('./models/purchases')

customerRouter.get('/', function(req, res){
  res.send("this is the customer api");
});

customerRouter.get('/items/', function(req, res){
  res.send("should get a list of items");
});



module.exports = customerRouter;

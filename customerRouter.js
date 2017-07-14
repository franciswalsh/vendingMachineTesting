const express = require('express');
const customerRouter = express.Router();
const Item = require('./models/item.js');
const Purchase = require('./models/purchase.js')
const models = require('./models')

customerRouter.get('/', function(req, res){
  res.send("this is the customer api");
});

customerRouter.get('/items/', function(req, res){
  models.Item.findAll().then(function(items){
    res.json({"status": "success",
              "data": items})
  })
});

customerRouter.post('/items/:itemId/purchases', function(req, res){
  let itemId = req.params.itemId;
  const purchase = models.Purchase.build({
    paidAmount : 100,
    itemId : itemId
  })
  purchase.save().then(function(newPurchase){
    models.Item.increment( 'quantity', { by: -1, where: {id: itemId}} )
    res.json(newPurchase)
    })
  })

module.exports = customerRouter;

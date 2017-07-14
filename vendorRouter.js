const express = require('express');
const vendorRouter = express.Router();
const Item = require('./models/item.js');
const Purchase = require('./models/purchase.js');
const models = require('./models')

vendorRouter.get('/', function(req, res){
  res.send("this is the vendor api");
});

vendorRouter.post('/items/', function(req, res){
  const item = models.Item.build({
    description: "new item",
    cost: 0,
    quantity: 0
  })
  item.save().then(function(newItem){
    res.json(newItem);
  })
});
vendorRouter.put('/items/:itemId', function(req, res){
  let itemId = req.params.itemId;
  models.Item.update({
    description: "new description",
    cost: 0,
    quantity: 0,
  },{
    where: {
      id: itemId
    }
  }).then(function(){
    res.json({"status" : "success"})
  })
})

vendorRouter.get('/purchases/', function(req, res){
  models.Purchase.findAll({
    include: [
      {
        model: models.Item,
        as: 'purchasedItem'
      }
    ]
  }).then(function(purchasedItems){
    let itemsPurchased = [];
    for (let i in purchasedItems){
      itemsPurchased.push({"item" : purchasedItems[i].purchasedItem.description,
                           "date_time" : purchasedItems[i].createdAt});
    }
    res.json({"status": "success",
              "data": itemsPurchased});
  })
});
vendorRouter.get('/money/', function(req, res){
  models.Purchase.findAll({
    include: [
      {
        model: models.Item,
        as: 'purchasedItem'
      }
    ]
  }).then(function(purchasedItems){
      let totalMoney = 0;
      for(let i in purchasedItems){
        totalMoney += purchasedItems[i].purchasedItem.cost;
      }
    res.json({"status" : "success",
              "data" : {
                  "moneyInMachine" : totalMoney
                }
              });
  }
)
})


module.exports = vendorRouter;

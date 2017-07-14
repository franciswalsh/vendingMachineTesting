const express = require("express");
const Item = require('./models/item.js');
const Purchase = require('./models/purchase.js')
const mongoose = require("mongoose");
const customerRouter = require('./customerRouter.js')
const vendorRouter = require('./vendorRouter.js')

const app = express();

app.use('/api/customer/', customerRouter);
app.use('/api/vendor', vendorRouter);

app.get('/', function(req, res){
  res.send('main page');
});




app.listen(3000, function(){
  console.log("Successfully started express app!");
})

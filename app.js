const express = require("express");
const itemsAvailable = require('./models/itemsAvailable');
const purchases = require('./models/purchases')
const mongoose = require("mongoose");
const customerRouter = require('./customerRouter.js')
const vendorRouter = require('./vendorRouter.js')

const app = express();

app.use('/api/customer/', customerRouter);
app.use('/api/vendor', vendorRouter);

app.get('/', function(req, res){
  res.redirect('/api/customer/');
});




app.listen(3000, function(){
  console.log("Successfully started express app!");
})

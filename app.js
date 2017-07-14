const express = require("express");
const Item = require('./models/item.js');
const Purchase = require('./models/purchase.js')
const mongoose = require("mongoose");
const customerRouter = require('./customerRouter.js')
const vendorRouter = require('./vendorRouter.js')
const models = require("./models");

const app = express();

app.use('/api/customer/', customerRouter);
app.use('/api/vendor', vendorRouter);


app.get('/', function(req, res){
  res.send('main page');
});



//  Use the code below if running test
if (require.main === "module") {
  app.listen(3000, function () {
      console.log('Express running on http://localhost:3000/.')
  });
}
// Use the code below if not running test
// app.listen(3000, function () {
//     console.log('Express running on http://localhost:3000/.')
// });

module.exports = app;

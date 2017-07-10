const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PurchasesSchema = new Schema({
  "status": String,
  "data": {
    "id": Number,
    "description": String,
    "cost": Number,
    "quantity": Number,
    "money_given": Number,
    "money_required": Number
  }

});

module.exports = mongoose.model("purchases", PurchasesSchema);

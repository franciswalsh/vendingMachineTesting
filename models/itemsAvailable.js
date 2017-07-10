const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemsAvailableSchema = new Schema({
  "id": Number,
  "description": String,
  "cost": Number,
  "quantity": Number
});

module.exports = mongoose.model("itemsAvailable", ItemsAvailableSchema);

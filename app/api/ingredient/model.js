var mongoose = require("mongoose");
var validate = require("mongoose-validator");

var ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  tags: [String]
});

var Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  frist_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  orders:{
    type : Object,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const userModel = mongoose.model("User-details", userSchema);

module.exports = userModel;

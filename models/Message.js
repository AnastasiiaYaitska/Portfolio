const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: Date,
});

module.exports =
  mongoose.models.Message ?? mongoose.model("Message", MessageSchema);

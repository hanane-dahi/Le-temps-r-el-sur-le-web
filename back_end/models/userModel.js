const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  FirstName: { type: String },
  LastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
});

module.exports = User = mongoose.model("user", userSchema);

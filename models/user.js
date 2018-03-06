
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  },
  scores: {
    score1: String,
    score2: String,
    score3: String,
    score4: String
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
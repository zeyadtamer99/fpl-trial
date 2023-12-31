const mongoose = require("mongoose");
const { USER_COLLECTION } = require("../../constants/constants");

module.exports = mongoose.model(
  "User",
  {
    name: { type: String },
    email: { type: String },
  },
  USER_COLLECTION
);

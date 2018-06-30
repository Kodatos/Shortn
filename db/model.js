const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shortnSchema = new Schema({
  long_url: {
    type: String,
    required: true
  },
  shortId: {
    type: String,
    minlength: 5,
    maxlength: 8,
    required: true
  },
  last_updated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("ShortnModel", shortnSchema);

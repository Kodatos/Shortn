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
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("ShortnModel", shortnSchema);

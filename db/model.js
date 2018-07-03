const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shortnSchema = new Schema({
  long_url: {
    type: String,
    required: [true, "Original URL required!"]
  },
  shortId: {
    type: String,
    minlength: 8,
    maxlength: 8,
    required: [true, "shortId required!"]
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("ShortnModel", shortnSchema);

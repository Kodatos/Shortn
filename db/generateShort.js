const crypto = require("crypto");

module.exports = () => {
  return crypto
    .randomBytes(6)
    .toString("base64")
    .replace(/\//g, "_")
    .replace(/\+/g, "-");
};

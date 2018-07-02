const Model = require("./model");
const generateShort = require("../utils/generateShort");

async function getFullUrl(shortid) {
  let found = await Model.findOne({ shortId: shortid });
  if (found) return found.long_url;
  throw new Error("No such URL found!");
}

/*Get short id for long url.
 Returns null if it doesn't exists. 
 Used it check if long url already exists in the database */
async function getShortID(url) {
  let search = await Model.findOne({ long_url: url });
  if (search) return search.shortId;
  return null;
}

async function addNewUrl(url) {
  let createdAt = Date.now();
  const shortId = generateShort();
  await Model.create({
    long_url: url,
    shortId: shortId,
    createdAt: createdAt,
  });
  return shortId;
}

module.exports = {
  getFullUrl,
  getShortID,
  addNewUrl
};

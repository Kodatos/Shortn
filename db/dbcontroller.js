const Model = require("./model");
const generateShort = require("./generateShort");

const getFullUrlFailed = "No such URL found!";

async function getFullUrl(shortid) {
  let found = await Model.findOne({ shortId: shortid });
  if (found) return found.long_url;
  throw new Error(getFullUrlFailed);
}

/*Get short id for long url.
 Returns null if it doesn't exists. 
 Used it check if long url already exists in the database */
async function getShortID(url) {
  let search = await Model.findOne({ long_url: url }).exec();
  if (search) return search.shortId;
  return null;
}

async function addNewUrl(url) {
  let createdAt = Date.now();
  let count, shortId;
  do {
    shortId = generateShort();
    count = await Model.count({ shortId: shortId }).exec();
  } while (count != 0);
  await Model.create({
    long_url: url,
    shortId: shortId,
    createdAt: createdAt
  });
  return shortId;
}

module.exports = {
  getFullUrl,
  getShortID,
  addNewUrl,
  getFullUrlFailed
};

const express = require("express");
const router = express.Router();
const dbController = require("./db/dbcontroller");
const validUrl = require("valid-url");

router.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  try {
    const long_url = await dbController.getFullUrl(shortId);
    res.redirect(long_url);
  } catch (err) {
    if (err.message === dbController.getFullUrlFailed) res.sendStatus(404);
    else {
      console.log(err.message);
      res.sendStatus(500);
    }
  }
});

router.use(express.json());

router.post("/addURL", async (req, res) => {
  const url = req.body.url;
  if (!validUrl.isWebUri(url)) {
    res.status(400).json({ message: "Invalid URL!" });
    return;
  }
  let generatedShortId;
  try {
    const initialSearch = await dbController.getShortID(url);
    if (initialSearch) generatedShortId = initialSearch;
    else generatedShortId = await dbController.addNewUrl(url);
    res.status(200).json({ shortID: generatedShortId });
  } catch (err) {
    console.log(err.message);
    res.sendStatus(500);
  }
});

module.exports = router;

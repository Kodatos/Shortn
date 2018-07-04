const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./router");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + "/public"));
app.use(router);

app.get("/", (req, res) => {
  res.sendFile("/public/index.html");
});
app.listen(8190);

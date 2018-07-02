const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;

app.use(express.static(__dirname + "/public"));
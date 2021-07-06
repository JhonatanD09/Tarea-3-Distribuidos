const express = require("express");
const app = express();
const Router = express.Router
const port = 3000;
const fs = require('fs')
const deletUser = require(__dirname+ "/delete.js")

app.use('/', require('./get'))
app.use("/",require("./post"))
app.use("/",require("./delete"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = Router
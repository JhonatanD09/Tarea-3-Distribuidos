const express = require("express");
const app = express();
const port = 3000;
'use strict'
const fs = require('fs')

app.get("/", (req, res) => {
  res.send(JSON.parse(fs.readFileSync(__dirname + '/names.json')));
  console.log()
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
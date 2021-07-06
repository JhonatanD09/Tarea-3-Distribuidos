const express = require("express");
const app = express();
const port = 3000;
'use strict'
const fs = require('fs')
const deletUser = require(__dirname+ "/delete.js")

app.use('/', require('./get'))
app.use("/",require("./post"))

app.delete("/", (req,res)=>{
  deletUser(req.query.name)
  res.send(JSON.parse(fs.readFileSync(__dirname+"/names.json")))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
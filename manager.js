const express = require("express");
const app = express();
const port = 3000;
'use strict'
const fs = require('fs')
const deletUser = require(__dirname+ "/delete.js")

app.get("/", (req, res) => {
  res.send(JSON.parse(fs.readFileSync(__dirname + '/names.json')));
  console.log()
})

app.delete("/", (req,res)=>{
  console.log("Hola")
  deletUser(req.query.name)
  res.send(JSON.parse(fs.readFileSync(__dirname+"/names.json")))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
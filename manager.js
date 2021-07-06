const express = require("express");
const app = express();
const port = 3000;
const fs = require('fs')
const deletUser = require(__dirname+ "/delete.js")
const getUsers = require(__dirname+ "/get.js")
const postUsers = require(__dirname+ "/post.js")


app.get("/", (req, res) => {
})

app.delete("/", (req,res)=>{
  deletUser(req.query.name)
  res.send(JSON.parse(fs.readFileSync(__dirname+"/names.json")))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
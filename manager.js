const express = require("express");
const app = express();
const port = 3000;
const fs = require('fs')
const deletUser = require(__dirname+ "/delete.js")


app.delete("/", (req,res)=>{
  deletUser(req.query.name)w
  res.send(JSON.parse(fs.readFileSync(__dirname+"/names.json")))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
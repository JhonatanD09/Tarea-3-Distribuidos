const express = require('express');
const router = express.Router();
router.use(express.json());
const fs = require('fs')
const json = JSON.parse(fs.readFileSync(__dirname+"/names.json"))

router.delete("/",(req,res)=>{
    let i = json.data.indexOf(req.body.name) 
    json.data.splice(i,1)
    fs.writeFileSync("names.json", JSON.stringify(json));
    res.send("ok");
})

module.exports = router
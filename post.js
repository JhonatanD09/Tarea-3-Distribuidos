const express = require('express');
const router = express.Router();
router.use(express.json());
const fs = require('fs')
const json = JSON.parse(fs.readFileSync(__dirname+"/names.json"))

router.post('/', (req, res)=>{
    json.data.push(req.body.name)
    fs.writeFileSync("names.json", JSON.stringify(json));
    res.send("ok");
});

module.exports = router;
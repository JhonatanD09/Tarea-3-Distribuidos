const router = require("./Routes");
const fs = require('fs')
const json = JSON.parse(fs.readFileSync(__dirname+"/names.json"))

router.delete("/",(req,res)=>{
    let i = json.data.indexOf(req.body.name) 
    if (i>=0) {
        json.data.splice(i,1)
        fs.writeFileSync("names.json", JSON.stringify(json));
        res.send("ok");
    }else{
        res.send("No existe el registro")
    }
})

module.exports = router
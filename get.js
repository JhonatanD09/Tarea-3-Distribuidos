const router = require("./Routes")
const fs = require('fs')

router.get('/', (req, res)=>{
    res.send(JSON.parse(fs.readFileSync(__dirname + '/names.json')));
})

module.exports = router;
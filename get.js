const express = require('express');
const router = express.Router();

router.use(express.json());
'use strict'
const fs = require('fs')
let json = JSON.parse(fs.readFileSync(__dirname + '/names.json'))

router.get('/', (req, res)=>{
    res.send(json);
})

module.exports = router;
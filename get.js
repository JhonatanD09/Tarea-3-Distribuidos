const express = require('express');
const router = express.Router();

router.use(express.json());
'use strict'
const fs = require('fs')

router.get('/', (req, res)=>{
    res.send(JSON.parse(fs.readFileSync(__dirname + '/names.json')));
})

module.exports = router;
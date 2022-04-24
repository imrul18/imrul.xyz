var express = require('express');
const router = express.Router();

const { insertdata, updatedata, deletedata, selectdata, customQuery } = require('../database/query.js');


router.post('/', (req, res) => {
    const data = req.body;
    console.log(data);
})

module.exports = router
var express = require('express');
const router = express.Router();

const { insertdata, updatedata, deletedata, selectdata, customQuery } = require('../database/query.js');

const tableName = "skillsdata";

router.post('/', (req, res) => {
    const data = req.body;
    insertdata(res, tableName, data);
})

router.put('/', (req, res) => {
    const data = req.body;
    const condition = `serial = '${data.serial}'`;
    updatedata(res, tableName, data, condition)
})

router.delete('/:serial', (req, res) => {
    const condition = `serial = '${req.params.serial}'`;
    deletedata(res, tableName, condition)
})

router.get('/', (req, res) => {
    const target = "*";
    const condition = ''; 
    selectdata(res, target, tableName, condition)
})

router.get('/:id', (req, res) => {
    const target = "*";
    const condition = `serial = ${req.params.id}` ; 
    selectdata(res, target, tableName, condition)
})

module.exports = router
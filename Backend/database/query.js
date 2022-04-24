const con = require('../database/database.js');

const globalNEWCondition = "where username = 'imrul18'"
const globalANDCondition = "and username = 'imrul18'"

const insertdata = (res, tableName, data) => {
    var field = '';
    var value = '';
    for (var key in data) {
        if (key != 'serial') {
            if (field == '') {
                field = key
                value = "'" + data[key] + "'"
            }
            else {
                field = field + "," + key
                value = value + ",'" + data[key] + "'"
            }

        }
    }
    const querydata = `INSERT INTO ${tableName} (${field}) VALUES (${value});`;
    con.query(querydata, (err) => {
        if (!err) {
            res.send({ type: "success", message: "Data insert successfully!!!" })
        } else {
            res.send({ type: "error", message: "Data insert fail!!!", addMessage: err })
        }
    });
}


const updatedata = (res, tableName, data, condition) => {
    var updateData = [];
    for (var key in data) {
        if (key != 'serial') {
            updateData.push(`${key} = '${data[key]}'`)
        }
    }
    const querydata = `UPDATE ${tableName} SET ${updateData.toString()} WHERE ${condition} ${globalANDCondition};`
    con.query(querydata, (err) => {
        if (!err) {
            res.send({ type: "success", message: "Data update successfully!!!" })
        } else {
            res.send({ type: "error", message: "Data update fail!!!", addMessage: err });
        }
    });
}

const deletedata = (res, tableName, condition) => {
    const querydata = `DELETE FROM ${tableName} WHERE ${condition} ${globalANDCondition};`;
    con.query(querydata, (err) => {
        if (!err) {
            res.send({ type: "success", message: "Data delete successfully!!!" })
        } else {
            res.send({ type: "error", message: "Data delete fail!!!", addMessage: err });
        }
    });
}

const selectdata = (res, target, tableName, condition) => {
    var querydata
    if (condition) {
        querydata = `SELECT ${target} FROM ${tableName} WHERE ${condition} ${globalANDCondition};`;
    } else {
        querydata = `SELECT ${target} FROM ${tableName} ${globalNEWCondition};`;
    }
    con.query(querydata, (err, result) => {
        if (!err) {
            res.send(result)
        } else {
            res.send({ type: "error", message: "Data show fail!!!", addMessage: err });
        }
    });
}

const customQuery = (res, querydata) => {
    con.query(querydata, (err, result) => {
        if (!err) {
            res.send(result)
        } else {
            res.send({ type: "error", message: "Data show fail!!!", addMessage: err });
        }
    });
}

module.exports = { insertdata, updatedata, deletedata, selectdata, customQuery }
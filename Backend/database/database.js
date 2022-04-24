const mysql = require('mysql2');

const con = mysql.createConnection({
   host: "localhost",
   user: "imrul",
   password: "@imrul1821",
   database: 'website',
   insecureAuth: false
});

//  var con = mysql.createConnection({
//      host        : "localhost",
//      user        : "imrul_afnan",
//      password    : "RUfu-,TRlCXm",
//      database    : 'imrul_MAIN_DOMAIN',
//      insecureAuth : false
//  });


module.exports = con
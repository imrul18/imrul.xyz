const mysql = require('mysql2');

const con = mysql.createConnection({
   host: "localhost",
   user: "imrul",
   password: "@imrul1821",
   database: 'website',
   insecureAuth: false
});

//  const con = mysql.createConnection({
//      host        : "localhost",
//      user        : "imrul_api",
//      password    : "(r)hX^V{yW_2",
//      database    : 'imrul_MAIN_DOMAIN',
//      insecureAuth : false
//  });


module.exports = con
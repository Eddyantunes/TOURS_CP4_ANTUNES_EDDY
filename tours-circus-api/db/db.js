const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password :  'toor', 
    database: 'circus'
});

module.exports = db;

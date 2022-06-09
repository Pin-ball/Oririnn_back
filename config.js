const mysql = require('mysql2');
// require('dotenv').config({path: `.env.${process.env.NODE_ENV}`})

const con = mysql.createConnection({
   host: process.env.HOST,
   user: process.env.MYUSER,
   password: process.env.PASSWORD,
   database : process.env.DATABASE,
 });

module.exports = con;
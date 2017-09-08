/*
 *  (Eat-Da-Burger):
 *       connection.js - connect to MySQL, pass it on
 *
 *-------------------------------------->8------------------------------------*/

 var mysql = require('mysql');

 var creds = {
     host: "localhost",
     user: "james",
     password: "james",
     database: "burgers_db",
     stringifyObjects: true
 };

 var cxs = mysql.createConnection(creds);
 cxs.connect();

 module.exports = cxs;


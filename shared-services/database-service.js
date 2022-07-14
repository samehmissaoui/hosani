const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    dateStrings: true
})
db.connect((error)=>{
    if(error)
        console.log(error);
    console.log('database connected');
})
module.exports= db;
const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user : 'lintang',
    password :'12345',
    database : 'toko'
});

db.connect();

app.get('/data', function(req,res){
    var sql = 'select * from karyawan';
    db.query(sql, (err, result)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    });
});

app.listen(3000,()=>{
    console.log('server @port 3000')
});
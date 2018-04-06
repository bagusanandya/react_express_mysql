const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user : 'bagus',
    password : '12july1994',
    database :'lapak'
});

db.connect();

//var nama = 'Budi';
var data = {nama:"caca", usia:24};
//var sql = 'select * from karyawan where nama = ?';
var sql = 'insert into karyawan set ?';
db.query(sql,data, (err,result)=>{
    if(err) throw err;
    console.log(result);
});

db.end();
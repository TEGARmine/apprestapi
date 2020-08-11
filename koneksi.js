var mysql = require('mysql');

/** @description buat koneksi database */
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrestapi'
});

conn.connect((err) => {
    // if(err) throw err; 
        console.log('Mysql terkoneksi');
});

// Membuka koneksi ke database MySQL
// conn.connect(function(err){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('Koneksi dengan id '+ connection.threadId);
//     }
// });

module.exports = conn;

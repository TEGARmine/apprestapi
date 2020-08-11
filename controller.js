'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API ku berjalan",res)
};

/** @description menampilkan semua data mahasiswa */
exports.tampilsemuamahasiswa = function(req, res){
    connection.query('SELECT * FROM mahasiswa', function(error, rows, field){
        if(error){
            connection.log(error);
        }else {
            response.ok(rows, res)
        }
    });
};
/**
 * I/O jornada com banco de dados
 * Lemos e gravamos no na tabela Desafio no banco de dados
 * 
 * Jornada: leosalema
 * Date: 24/01/2019
 * Time: 15:03
 */

 const connection = require('../config/database')

 function Desafio(){
     this.get = function(id, res) {
         connection.acquire(function(err, con) {
             con.query('SELECT * FROM desafio WHERE id_trilha = ?', id, function(err, result) {
                 con.release()
                 res.send(result)
             })
         })
     }

     this.getId = function(id, res) {
         connection.acquire(function(err, con) {
             con.query('SELECT * FROM desafio WHERE id = ?', id, function(err, result) {
                 con.release()
                 res.send(result)
             })
         })
     }

     this.create = function(req, res) {
         connection.acquire(function(err, con) {
             con.query('INSERT INTO desafio SET ?', req, function(err, result) {
                 con.release()
                 if (err)
                    res.send({ status: 1, message: 'Falha ao gravar o registro'})
                else
                    res.send({ status: 0, message: 'Registro gravado com sucesso'})
             })
         })
     }

     this.update = function(id, req, res) {
         connection.acquire(function(err, con) {
             con.query('UPDATE desafio SET ? WHERE id = ?', [req, id], function(err, result) {
                 con.release()
                 if (err)
                    res.send({ status: 1, message: 'Falha ao gravar o registro'})
                else
                    res.send({ status: 0, message: 'Registro gravado com sucesso'})
             })
         })
     }
 }

 module.exports = new Desafio()
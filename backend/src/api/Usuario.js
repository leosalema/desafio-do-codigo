/**
 * I/O jornada com banco de dados
 * Lemos e gravamos no na tabela Usuario no banco de dados
 * 
 * Jornada: leosalema
 * Date: 24/01/2019
 * Time: 15:40
 */

 const connection = require('../config/database')

 function Usuario() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query('SELECT * FROM usuario', function(err, result){
                con.release()
                res.send(result)
            })
        })
    }

    this.getId = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('SELECT * FROM usuario WHERE id = ?', id, function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }

    this.create = function(req, res) {
        connection.acquire(function(err, con) {
            con.query('INSERT INTO usuario SET ?', req, function(err, result) {
                con.release()
                if (err)
                    res.send({ status: 1, message: 'Erro ao gravar o registro'})
                else
                    res.send({ status: 0, message: 'Registro gravado com sucesso'})
            })
        })
    }

    this.update = function(id, req, res) {
        connection.acquire(function(err, con) {
            con.query('UPDATE usuario SET ? WHERE id = ?', [req, id], function(err, result) {
                con.release()
                if (err)
                    res.send({ status: 1, message: 'Erro ao gravar o registro'})
                else
                    res.send({ status: 0, message: 'Registro gravado com sucesso'})

            })
        })
    }
 }

 module.exports = new Usuario()
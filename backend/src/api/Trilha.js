/**
 * I/O jornada com banco de dados
 * Lemos e gravamos no na tabela trilha no banco de dados
 * 
 * Jornada: leosalema
 * Date: 19/01/2019
 * Time: 18:03
 */

const connection = require('../config/database')

function Trilha() {
    this.get = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('SELECT * FROM trilha WHERE id_jornada = ?', [id], function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }

    this.getId = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('SELECT * FROM trilha WHERE id = ?', [id], function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }

    this.create = function(req, res) {
        connection.acquire(function(err, con) {
            con.query('INSERT INTO trilha SET ? ', req, function(err, result) {
                con.release()
                if (err)
                    res.send({ status: 1, message: 'Falha ao gravar o registro' })           
                else
                    res.send({ status: 0, message: 'Registro gravado com sucesso' })
            })
        })
    }

    this.update = function(id, req, res) {
        connection.acquire(function(err, con) {
            con.query('UPDATE trilha SET ? WHERE id = ?', [req, id], function(err, result) {
                con.release()
                if(err)
                    res.send({ status: 1, message: 'Falha ao gravar o registro'})
                else
                    res.send({ status: 0, message: 'Registro gravado com sucesso'})
            })
        })
    }
}

module.exports = new Trilha()
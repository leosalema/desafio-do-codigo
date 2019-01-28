/**
 * I/O jornada com banco de dados
 * Lemos e gravamos no na tabela jornada no banco de dados
 * 
 * Jornada: leosalema
 * Date: 19/01/2019
 * Time: 16:12
 */


const connection = require('../config/database')

function Jornada() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query('SELECT * FROM jornada', function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }
    
    this.getId = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('SELECT * FROM jornada WHERE id = ?', [id], function(err, result) {
                con.release()
                res.send(result)
            })
        })
    }

    this.create = function(req, res) {
        connection.acquire(function(err, con) {
            con.query('INSERT INTO jornada SET ?', req, function(err, result) {
                if (err)
                    res.send({ status: 1, message: 'Erro ao gravar o registro' })
                else
                    res.send({ status: 0, message: 'Registro salvo com sucesso' })
            })
        })
    }

    this.update = function(id, req, res) {
        connection.acquire(function(err, con) {
            con.query('UPDATE jornada SET ? WHERE id = ?', [req, id], function(err, result) {
                if (err)
                    res.send({ status: 1, message: 'Erro ao gravar o registro' })
                else
                    res.send({ status: 0, message: 'Registro salvo com sucesso' })
            })
        })
    }
}

module.exports = new Jornada()
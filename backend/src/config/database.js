/**
 * Criando a conexão com o Banco de Dados
 * Ele é responsável por criar a conexão com o banco
 * 
 * Jornada: leosalema
 * Date: 19/01/2019
 * Time: 14:32
 */

const mysql = require('mysql')

function Database() {
    this.pool = null

    this.init = function() {
        this.pool = mysql.createPool({
            connectionLimit: 100,
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'desafio',
            port: 8889
        })
    }

    this.acquire = function(callback) {
        this.pool.getConnection(function(err, connection) {
            callback(err, connection)
        })
    }
}

module.exports = new Database()
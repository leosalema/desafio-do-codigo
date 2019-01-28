/**
 * Criando o servidor Express
 * Ele é responsável por gerenciar as requisições e rotas
 * 
 * Jornada: leosalema
 * Date: 19/01/2019
 * Time: 15:07
 */

const port = Number(process.env.PORT || 5000)

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const queryParser = require('express-query-int')
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

const database = require('./database')
database.init()

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}`)
})

module.exports = server
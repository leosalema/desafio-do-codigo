/**
 * Criando as rotas
 * Ele é responsável por direcionar o caminho solicitado para o arquivo que contém as query necessárias
 * 
 * Jornada: leosalema
 * Date: 19/01/2019
 * Time: 15:07
 */


const express = require('express')
const Jornada = require('../api/Jornada')
const Trilha = require('../api/Trilha')
const Desafio = require('../api/Desafio')
const Usuario = require('../api/Usuario')

module.exports = function(server) {
    const api = express.Router()

    server.use('/api', api)

    server.get('/', function(req, res) {
        res.send('Hello')
    })

    server.get('/api/', function(req, res) {
        res.send('API')
    })

    server.get('/api/admin/jornada/', function(req, res) {
        Jornada.get(res)
    })

    server.get('/api/admin/jornada/:id', function(req, res) {
        Jornada.getId(req.params.id, res)
    })

    server.post('/api/admin/jornada/', function(req, res) {
        Jornada.create(req.body, res)
    })

    server.put('/api/admin/jornada/:id', function(req, res) {
        Jornada.update(req.params.id, req.body, res)
    })

    server.get('/api/admin/jornada/:id/trilha/', function(req, res) {
        Trilha.get(req.params.id, res)       
    })

    server.get('/api/admin/jornada/trilha/:id', function(req, res) {
        Trilha.getId(req.params.id, res)
    })

    server.post('/api/admin/jornada/:id/trilha/', function(req, res) {
        Trilha.create(req.body, res)
    })

    server.put('/api/admin/jornada/trilha/:id', function(req, res) {
        Trilha.update(req.params.id, req.body, res)
    })

    server.get('/api/admin/jornada/trilha/:id/desafio/', function(req, res) {
        Desafio.get(req.params.id, res)
    })

    server.get('/api/admin/jornada/trilha/desafio/:id', function(req, res) {
        Desafio.getId(req.params.id, res)
    })

    server.post('/api/admin/jornada/trilha/:id/desafio/', function(req, res) {
        Desafio.create(req.body, res)
    })

    server.put('/api/admin/jornada/trilha/desafio/:id', function(req, res) {
        Desafio.update(req.params.id, req.body, res)
    })

    server.get('/api/admin/usuario/', function(req, res) {
        Usuario.get(res)
    })

    server.get('/api/admin/usuario/:id', function(req, res) {
        Usuario.getId(req.params.id, res)
    })

    server.post('/api/admin/usuario/', function(req, res) {
        Usuario.create(req.body, res)
    })

    server.put('/api/admin/usuario/:id', function(req, res) {
        Usuario.update(req.params.id, req.body, res)
    })
}
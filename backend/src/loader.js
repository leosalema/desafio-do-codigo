/**
 * Arquivo de entrada do Backend
 * Ele faz as importações necessárias para o funcionamento do Backend
 * 
 * Jornada: leosalema
 * Date: 19/01/2019
 * Time: 14:01
 */


const server = require('./config/server')
require('./config/database')
require('./config/routes')(server)
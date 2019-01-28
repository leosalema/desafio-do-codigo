/**
 * Criando o cors
 * Ele é responsável por permitir quais requisições poderão ser usadas
 * 
 * Jornada: leosalema
 * Date: 19/01/2019
 * Time: 14:57
 */

module.exports = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 
        'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorizatoin')
    next()
}
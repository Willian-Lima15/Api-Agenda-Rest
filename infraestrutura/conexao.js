const mssql = require('mssql')

const conexao = mssql.createConnection({
    user: 'sa',
    password: 'po12rri',
    server: 'localhost',
    database: 'ApiAgenda'
})

module.exports = conexao
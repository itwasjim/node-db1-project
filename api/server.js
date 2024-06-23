const express = require("express");

const server = express();
const accountsRouter = require('./accounts/accounts-router')

server.use(express.json());

server.use('/api/accounts', accountsRouter)

server.use('*', (req, res) => {
    res.status(404).json({
        message: 'Not Found'
    })
})

module.exports = server;
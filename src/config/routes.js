const express = require('express')

module.exports = function(server){

    const router = express.Router();
    server.use('/api', router);

    // TODO Routes
    const todoServices = require('../api/todo/todoService')
    todoServices.register(router, '/todos')
}
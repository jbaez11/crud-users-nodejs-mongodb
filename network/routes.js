const express = require('express');
const users = require('../components/users/network');

const routes = function(server){
    server.use(`/users`, users);
    
}

module.exports = routes;


const express = require("express");

const accounts_router = require("../api/accounts/accounts-router");

const server = express();
server.use(express.json());

server.use("/api/accounts", accounts_router);

module.exports = server;

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use((req, res) => {
    res.json("I'm alive and kicking!");
})

module.exports = server;
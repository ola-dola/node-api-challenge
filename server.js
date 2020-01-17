const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const projectsRouter = require('./data/helpers/projectRouter.js');
const actionsRouter = require('./data/helpers/actionRouter.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

server.use((req, res) => {
    res.json("I'm alive and kicking!");
})

module.exports = server;
const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("./projects/projectsRouter");
const actionsRouter = require("./actions/actionsRouter");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/projects", projectsRouter);
server.use("/api/projects/:projectId/actions", actionsRouter);

server.get("*", (req, res) => {
  res.send("App is live");
});

module.exports = server;

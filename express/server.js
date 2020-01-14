const express = require("express");

const mainRouter = require("./mainRouter");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send(`Microphone check 123...`);
});

server.use("./api/posts", mainRouter);

module.exports = server;

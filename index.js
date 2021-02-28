// src/server.js
const { Server } = require('boardgame.io/server');
const { Dominoes } = require('./Game/Dominoes');

const server = Server({ games: [Dominoes] });

server.run(8000);
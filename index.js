// src/server.js
const { Server } = require('boardgame.io/server');
// const { Dominoes } = require('./Game/Dominoes');
const { Dominoes } = require('../los_dominos/game/Dominoes');

const server = Server({ games: [Dominoes] });

server.run(8000);
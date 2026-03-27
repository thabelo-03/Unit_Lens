"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: { origin: '*' }
});
const PORT = process.env.SOCKET_PORT || 3000;
io.on('connection', (socket) => {
    console.log(`[Socket] Mobile Client Connected: ${socket.id}`);
    // TODO: Setup listeners for React Native -> Python Service routing
    socket.on('disconnect', () => {
        console.log(`[Socket] Mobile Client Disconnected: ${socket.id}`);
    });
});
httpServer.listen(PORT, () => {
    console.log(`Node Orchestrator running on port ${PORT}`);
});

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
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

httpServer.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`[Orchestrator] Node Server running on port ${PORT}`);
});
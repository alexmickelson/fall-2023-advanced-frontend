import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
import { Server as WebSocketServer } from 'ws';

const PORT = 3000;

const app = express();
const server = http.createServer(app);
const webSocketServer = new WebSocketServer({ server, path: "/ws/chat" });

app.use(cors());

webSocketServer.on('connection', (webSocket) => {
  console.log('Client connected');

  webSocket.on('message', (data) => {
    webSocketServer.clients.forEach((client) => {
      client.send(data);
    });
  });

  webSocket.on('close', () => {
    console.log('Client disconnected');
  });
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});

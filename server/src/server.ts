import express from 'express';
import path from 'path';
import http from 'http';
import { Server } from 'colyseus';
import { WebSocketTransport } from '@colyseus/ws-transport'

export function serverStart() {
  const app = express();
  const server = http.createServer(app);
  const port = 8443;

  app.use(express.static(path.join(__dirname, '../../client')));
  
  const gameServer = new Server({
    transport: new WebSocketTransport({
      server: server
    })
  });

  gameServer.listen(port);

  console.log(`Listening on port: ${port}`);
}
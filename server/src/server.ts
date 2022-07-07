import express from 'express';
import path from 'path';
import http from 'http';
import { Server } from 'colyseus';
import { WebSocketTransport } from '@colyseus/ws-transport'
import { databaseConnect } from './controllers/database/database';
import { router } from './router';
import { MainRoom } from './rooms/mainRoom';

export async function serverStart() {
  const app = express();
  const server = http.createServer(app);
  const port = 8443;

  app.use(express.static(path.join(__dirname, '../../client')));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true, limit: "10kb" }));
  app.use("/account", router);
  
  const gameServer = new Server({
    transport: new WebSocketTransport({
      server: server
    })
  });

  databaseConnect();

  gameServer.listen(port);
  gameServer.define("main_room", MainRoom).filterBy(['map']);

  console.log(`Listening on port: ${port}`);
}
import express from 'express';
import cors from 'cors';

import './database.js';
import apiRouter from './src/api/router.js';
import authMiddleware from './src/middlewares/auth.middleware.js';

const server = express();

server.use(express.json());
server.use(cors({ origin: true, }));
server.use(authMiddleware);
server.use(apiRouter);

// eslint-disable-next-line no-undef
const { PORT, } = process.env;
const port = PORT || 3000;
server.listen(port, () => {
  console.log(`Project has been started at port ${ port }`);
});

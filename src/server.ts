import dotenv from 'dotenv';
import * as http from 'http';
import 'reflect-metadata';

dotenv.config();

import App from './app';

const port = normalizePort(process.env.PORT || 3000);
App.set('port', port);

const server = http.createServer(App);
server.listen(port);

function normalizePort(val: number | string): number | string | false {
  const parsedPort: number = typeof val === 'string' ? parseInt(val, 10) : val;
  if (isNaN(parsedPort)) {
    return val;
  } else if (parsedPort >= 0) {
    return parsedPort;
  } else {
    return false;
  }
}

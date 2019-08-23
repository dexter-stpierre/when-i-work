import express, { Request, Response } from 'express';
import * as bodyParser from 'body-parser';

import { shiftRouter } from './api/shift';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(bodyParser.urlencoded({ extended: true }));
    this.express.use(bodyParser.json());
  }

  private routes(): void {
    this.express.use('/shifts', shiftRouter);
    this.express.use('/*', (_: Request, res: Response) => {
      res.send('Hello World');
    });
  }
}

export default new App().express;

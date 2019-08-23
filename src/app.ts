import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import { createConnection } from 'typeorm';
const connection = createConnection();

import { shiftRouter } from './api/shift';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.mountMiddlewear();
    this.routes();
  }

  private mountMiddlewear(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }

  private routes(): void {
    this.express.use('/shifts', shiftRouter);
    this.express.use('/*', (_: Request, res: Response) => {
      res.send('Hello World');
    });
  }
}

export default new App().express;

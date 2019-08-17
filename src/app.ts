import express, { Request, Response } from 'express';
import { shiftRouter } from './api/shift';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.routes();
  }

  private routes(): void {
    this.express.use('/shifts', shiftRouter)
    this.express.use('/*', (_: Request, res: Response) => {
      res.send('Hello World');
    });
  }
}

export default new App().express;

import express, { Request, Response } from 'express';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.routes();
  }

  private routes(): void {
    this.express.use('/*', (_: Request, res: Response) => {
      res.send('Hello World');
    });
  }
}

export default new App().express;

import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import { createConnection } from 'typeorm';
const connection = createConnection();

import { shiftRouter } from './api/shift';
import userRouter from './api/users';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.mountMiddlewear();
    this.routes();
  }

  private mountMiddlewear(): void {
    this.express.use(this.hasAuth);
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true }));
  }

  private hasAuth(req: Request, res: Response, next: NextFunction) {
    const [, authHeader] = req.header('Authorization').split(' ');
    if (authHeader !== process.env.API_KEY) {
      return res.sendStatus(401);
    }
    next();
  }

  private routes(): void {
    this.express.use('/shifts', shiftRouter);
    this.express.use('/users', userRouter);
    this.express.use('/*', (_: Request, res: Response) => {
      res.send('Hello World');
    });
  }
}

export default new App().express;

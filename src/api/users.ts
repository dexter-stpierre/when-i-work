import { NextFunction, Request, Response, Router } from 'express';
import { FindConditions } from 'typeorm';

import { User } from '../entities/user';

export class UserRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get('/', this.getUsers);
  }

  private getUsers(req: Request, res: Response, next: NextFunction) {
    User.find().then((users) => {
      res.send(users);
    });
  }
}

export const userRouter = new UserRouter().router;

export default userRouter;

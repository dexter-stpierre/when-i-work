import { NextFunction, Request, Response, Router } from 'express';

export class ShiftRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private createShift(req: Request, res: Response, next: NextFunction) {
    res.send('Shift Created');
  }

  init() {
    this.router.post('/shift', this.createShift);
  }
}

const userRoutes = new UserRouter().router;

export default userRoutes;

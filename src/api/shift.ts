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
    this.router.post('/', this.createShift);
  }
}

export const shiftRouter = new ShiftRouter().router;

export default shiftRouter;

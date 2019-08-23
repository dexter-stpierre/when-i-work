import { NextFunction, Request, Response, Router } from 'express';

import { Shift } from '../entities/shift';

export class ShiftRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private createShift(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    Shift.save(req.body);
    res.send('Shift Created');
  }

  init() {
    this.router.post('/', this.createShift);
  }
}

export const shiftRouter = new ShiftRouter().router;

export default shiftRouter;

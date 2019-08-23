import { NextFunction, Request, Response, Router } from 'express';

import { Shift } from '../entities/shift';

export class ShiftRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.post('/', this.createShift);
  }

  private createShift(req: Request, res: Response, next: NextFunction) {
    console.log(req.body);
    Shift.save(req.body);
    res.send('Shift Created');
  }
}

export const shiftRouter = new ShiftRouter().router;

export default shiftRouter;

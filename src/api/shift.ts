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
    const shift = new Shift();
    shift.start = req.body.start;
    shift.end = req.body.end;
    shift.userId = req.body.userId;
    Shift.save(shift)
      .then((savedShift) => {
        res.send(savedShift);
      })
      .catch((error) => {
        res.status(500).send(error.message);
      });
  }
}

export const shiftRouter = new ShiftRouter().router;

export default shiftRouter;

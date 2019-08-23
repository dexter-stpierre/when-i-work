import { NextFunction, Request, Response, Router } from 'express';

import { Shift } from '../entities/shift';

export class ShiftRouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get('/', this.getShifts);
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
        // Need to determine if this is an issue with the data and return a proper error code
        res.status(500).send(error.message);
      });
  }

  private getShifts(req: Request, res: Response, next: NextFunction) {
    Shift.find({
      order: {
        start: 'ASC',
      },
    }).then((shifts) => {
      res.send(shifts);
    });
  }
}

export const shiftRouter = new ShiftRouter().router;

export default shiftRouter;

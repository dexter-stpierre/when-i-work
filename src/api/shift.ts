import { NextFunction, Request, Response, Router } from 'express';
import { FindConditions } from 'typeorm';

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
    // console.log(req.params);
    const { start, end } = req.query;
    // constructing the where clause in this way handles if start or end are null while putting an
    // object literal in the find method would not handle it and would search for where one of them are null
    const where: FindConditions<Shift> = {};
    if (start) {
      where.start = start;
    }
    if (end) {
      where.end = end;
    }
    Shift.find({
      order: {
        start: 'ASC',
      },
      where,
    }).then((shifts) => {
      res.send(shifts);
    });
  }
}

export const shiftRouter = new ShiftRouter().router;

export default shiftRouter;

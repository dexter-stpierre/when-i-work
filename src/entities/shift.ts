import {
  BaseEntity,
  BeforeInsert,
  BeforeUpdate,
  Between,
  Column,
  Entity,
  FindConditions,
  JoinColumn,
  ManyToOne,
  Not,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user';

@Entity({ name: 'shifts' })
export class Shift extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column({ type: 'datetime' })
  public start: Date;

  @Column({ type: 'datetime' })
  public end: Date;

  @Column({ type: 'int', name: 'user_id' })
  public userId: number;

  @ManyToOne((type) => User, (user) => user.shifts)
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @BeforeInsert()
  @BeforeUpdate()
  public async userHasShift() {
    let where: Array<FindConditions<Shift>> = [
      {
        start: Between(this.start, this.end),
        userId: this.userId,
      },
      {
        end: Between(this.start, this.end),
        userId: this.userId,
      },
    ];
    if (this.id) {
      where = where.map((whereClause) => {
        whereClause.id = Not(this.id);
        return whereClause;
      });
    }
    const shifts = await Shift.find({
      where,
    });
    if (shifts.length) {
      throw new Error('User already has a shift at this time');
    }
  }
}

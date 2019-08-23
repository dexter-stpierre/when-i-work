import {
  BaseEntity,
  BeforeInsert,
  Between,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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
  public async userHasShift() {
    const shifts = await Shift.find({
      where: [
        {
          start: Between(this.start, this.end),
          userId: this.userId,
        },
        {
          end: Between(this.start, this.end),
          userId: this.userId,
        },
      ],
    });
    if (shifts.length) {
      throw new Error('User already has a shift at this time');
    }
  }
}

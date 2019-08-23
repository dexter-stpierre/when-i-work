import {
  BaseEntity,
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

  @Column({ type: 'date' })
  public start: Date;

  @Column({ type: 'date' })
  public end: Date;

  @Column({ type: 'int', name: 'user_id' })
  public userId: number;

  @ManyToOne((type) => User, (user) => user.shifts)
  @JoinColumn({ name: 'user_id' })
  public user: User;
}

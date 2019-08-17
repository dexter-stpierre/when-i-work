import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from './user';

@Entity()
export class Shift {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  start: Date;

  @Column()
  end: Date;

  @Column()
  userId: number;

  @Column(type => User)
  user: User;
}

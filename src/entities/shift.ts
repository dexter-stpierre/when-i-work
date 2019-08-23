import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { User } from './user';

@Entity()
export class Shift extends BaseEntity {
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

import { Entity, Column } from 'typeorm';
import BaseEntity from '~/entities/base';

@Entity('users')
export default class User extends BaseEntity {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { User } from './User';

@ObjectType()
@Entity()
export class Role {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @ManyToMany(() => User)
  users: User[];
}

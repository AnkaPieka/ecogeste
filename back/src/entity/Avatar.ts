// import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { User } from './User';

@ObjectType()
// @Entity()
export class Avatar {
  @Field()
  // @PrimaryGeneratedColumn()
  id: number;

  @Field()
  // @Column()
  file: string;

  @Field(() => [User])
  // @OneToMany(() => User, (user) => user.avatar)
  users: User[];
}

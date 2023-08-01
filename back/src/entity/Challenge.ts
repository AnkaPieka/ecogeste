import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';
import { Time } from './interfaces';

@ObjectType()
@Entity()
export class Challenge {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  progress: number;

  @Field()
  @Column()
  photo: string;

  @Field()
  @Column()
  likes: number;

  @Field()
  @Column()
  creator: number;

  @Field()
  @Column()
  duration: Time;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.challenges, {
    onDelete: 'CASCADE',
  })
  user: User;
}

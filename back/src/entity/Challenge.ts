import { Field, ObjectType } from 'type-graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Ecogeste } from './Ecogeste';
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

  @Field((type) => String)
  @Column()
  duration: Time;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.challenges, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToMany(() => User)
  @JoinTable({
    name: 'user_participation',
    joinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'challenge',
      referencedColumnName: 'id',
    },
  })
  users: User[];

  @ManyToMany(() => Ecogeste)
  @JoinTable({
    name: 'challenge_ecogeste_list',
    joinColumn: {
      name: 'ecogeste',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'challenge',
      referencedColumnName: 'id',
    },
  })
  ecogestes: Ecogeste[];
}

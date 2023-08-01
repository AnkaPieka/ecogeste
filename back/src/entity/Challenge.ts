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
// import { Time } from './interfaces';

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

  @Field(() => String)
  @Column()
  duration: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.challenges, {
    onDelete: 'CASCADE',
  })
  user: User;

  @ManyToMany(() => User)
  users: User[];

  @ManyToMany(() => Ecogeste)
  @JoinTable({
    name: 'challenge_ecogeste_list',
    joinColumn: {
      name: 'challenge',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'ecogeste',
      referencedColumnName: 'id',
    },
  })
  ecogestes: Ecogeste[];
}

import { Field, ObjectType } from 'type-graphql';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Challenge } from './Challenge';

@ObjectType()
@Entity()
export class Ecogeste {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  icon: string;

  @Field()
  @Column()
  level: number;

  @Field()
  @Column()
  category: string;

  @ManyToMany(() => Challenge)
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
  challenges: Challenge[];
}

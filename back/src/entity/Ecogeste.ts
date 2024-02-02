import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
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
  level: number;

  @Field()
  @Column()
  proof: boolean;

  @Field()
  @Column()
  category: string;

  @ManyToMany(() => Challenge)
  challenges: Challenge[];
}

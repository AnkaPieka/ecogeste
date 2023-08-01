import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Challenge } from '../Challenge';
import { Ecogeste } from '../Ecogeste';

@ObjectType()
@Entity()
export class ChallengeEcogesteList {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  challenge_id: number;

  @Field()
  @Column()
  ecogeste_id: number;

  @Field(() => Challenge)
@ManyToOne(() => Challenge, (challenge) => challenge.ecogestes, {
    onDelete: 'CASCADE',
  })
  ecogestes: Ecogeste[];

  @Field(() => Ecogeste)
  @ManyToOne(() => Ecogeste, (ecogeste) => ecogeste.challenges, {
    onDelete: 'CASCADE',
  })
  challenges: Challenge[];
}

import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from '../User';
import { Challenge } from '../Challenge';

@ObjectType()
@Entity()
export class UserParticipation {
  @Field()
  @Column()
  user_id: number;

  @Field()
  @Column()
  challenge_id: number;

  @Field(() => Challenge)
  @ManyToOne(() => Challenge, (challenge) => challenge.users, {
    onDelete: 'CASCADE',
  })
  users: User[];

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.challenges, {
    onDelete: 'CASCADE',
  })
  challenges: Challenge[];
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { Report } from './Report';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { Challenge } from './Challenge';
import { Role } from './Role';

@ObjectType()
@Entity()
export class User {

  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;

  @Field(() => Report)
  @OneToMany(() => Report, (report) => report.user, { onDelete: 'CASCADE' })
  reports: Report[];

  @Field(() => Comment)
  @OneToMany(() => Comment, (comment) => comment.user, { onDelete: 'CASCADE' })
  comments: Comment[];

  @Field(() => Challenge)
  @OneToMany(() => Challenge, (challenge) => challenge.user, {
    onDelete: 'CASCADE',
  })
  challenges: Challenge[];

  @Field(() => Avatar)
  @ManyToOne(() => Avatar, (avatar) => avatar.users, { onDelete: 'CASCADE' })
  avatar: Avatar;

  @ManyToMany(() => Role)
  @JoinTable({
    name: 'user_role',
    joinColumn: {
      name: 'role',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'user',
      referencedColumnName: 'id',
    },
  })
  roles: Role[];

  @ManyToMany(() => Challenge)
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
  users: Challenge[];
}

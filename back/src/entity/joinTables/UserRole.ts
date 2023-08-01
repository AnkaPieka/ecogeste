import { Entity, Column, ManyToOne } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';
import { User } from '../User';
import { Role } from '../Role';

@ObjectType()
@Entity()
export class UserRole {
  @Field()
  @Column()
  user_id: number;

  @Field()
  @Column()
  role_id: number;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.roles, { onDelete: 'CASCADE' })
  roles: Role[];

  @Field(() => Role)
  @ManyToOne(() => Role, (role) => role.users, { onDelete: 'CASCADE' })
  users: User[];
}

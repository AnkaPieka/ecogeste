import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class Icon {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  file: string;
}

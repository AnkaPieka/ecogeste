import { Arg, Mutation, Resolver } from 'type-graphql';
import { User } from '../entity/User';
import dataSource from '../utils';

@Resolver()
class UserResolver {
  @Mutation(() => [User])
  async addUser(
    @Arg('name') name: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User> {
    const createUser = await dataSource
      .getRepository(User)
      .save({ name, email, password });
    return createUser;
  }

  //get user => login
  //modify => update (mdp, userName)
  //delete user => delete
}

export default UserResolver;

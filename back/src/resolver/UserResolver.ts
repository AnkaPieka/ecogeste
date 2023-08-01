import { Arg, Mutation, Resolver , Query} from 'type-graphql';
import { User } from '../entity/User';
import dataSource from '../utils';

@Resolver()
class UserResolver {
  @Mutation(() => User)
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

  @Query(() => [User])
  async getAll(
    @Arg('name') name: string,
    @Arg('email') email: string,
  ) : Promise<User[]> {
    try {
      const getOneUser = await dataSource
        .getRepository(User)
        .find({where: {name, email}});
      return getOneUser;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  @Mutation(() => String)
  async deleteUser(
    @Arg('id') id: number,
  ) : Promise<String> {
    const deleteResult = await dataSource.getRepository(User).delete({ id });
    console.log(deleteResult);
    return 'User deleted successfully';
  }

  @Mutation(() => User)
async updateUser(@Arg("id") id: number, @Arg("data") data: User) {
  const user = await  dataSource
  .getRepository(User) 
  .find({ where: { id }});

  if (!user) {
    throw new Error(`The user with id: ${id} does not exist!`);
  }

  // Object.assign(user, data);
  // await user.save();

  return user;
}
  return []
  // get user => login
  // modify => update (mdp, userName)
  // delete user => delete
}

export default UserResolver;

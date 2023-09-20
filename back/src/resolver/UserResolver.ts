import { Arg, Mutation, Resolver , Query} from 'type-graphql';
import { User } from '../entity/User';
import dataSource from '../utils';
import * as argon2 from "argon2";
import jwt from "jsonwebtoken";

@Resolver()
class UserResolver {
  @Mutation(() => User)
  async addUser(
    @Arg('name') name: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User> {

      const createUser = new User();
      createUser.name = name;
      createUser.email = email;
      createUser.password = await argon2.hash(password);
      const userFromDB = await dataSource.manager.save(User,createUser);
      console.log(userFromDB);
      return userFromDB;
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

  @Query(() => String)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<string> {
    try {
      
      const userFromDB = await dataSource.manager.findOne(User, { where: { email } });

      if (!userFromDB) {
        throw new Error('User not found');
      }

     
      const isPasswordValid = await argon2.verify(userFromDB.password, password);

      if (!isPasswordValid) {
        throw new Error('Invalid password');
      }

     
      const token = jwt.sign({ userId: userFromDB.id }, 'votre_clé_secrète', {
        expiresIn: '1h', 
      });

      return token;
    } catch (err) {
      console.log(err);
      throw new Error('Erreur lors de la connexion');
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
  async updateUser(@Arg("id") id: number,
  @Arg('name', { nullable: true }) name: string,
  @Arg('email', { nullable: true }) email: string,
  @Arg('password', { nullable: true }) password: string
  ): Promise<User> {
    
  const user = await dataSource
    .getRepository(User)
    .findOne({where: {id}});

  if (user === null) {
    throw new Error(`The user with id: ${id} does not exist!`);
  }

  // Effectuez les mises à jour sur l'utilisateur si les champs sont fournis
  if (name !== "") {
    user.name = name;
  }
  if (email !== "") {
    user.email = email;
  }
  if (password !== "") {
    user.password = password;
  }

  const updatedUser = await dataSource.getRepository(User).save(user);
  return updatedUser;
}
}


export default UserResolver;

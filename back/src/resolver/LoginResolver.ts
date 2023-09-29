
import { Arg, Mutation, Resolver } from 'type-graphql';
import { User } from '../entity/User';
import dataSource from '../utils';

@Resolver()
class LoginResolver {
@Mutation(() => User, { nullable: true })
async loginUser(
    @Arg('email') email: string,
    @Arg('password') password: string
): Promise<User | null> {
    try {

    const user = await dataSource.getRepository(User).findOne({ where: { email, password } });

    // if (!user) {
    //     return null;
    // }

    return user;
    } catch (error) {
    console.error(error);
    throw new Error('Une erreur s\'est produite lors de la connexion.');
    }
}
}

export default LoginResolver;

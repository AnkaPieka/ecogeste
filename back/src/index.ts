import 'reflect-metadata';
import * as jwt from 'jsonwebtoken';
import dataSource from './utils';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import UserResolver from './resolver/UserResolver';
// import WilderResolver from './resolver/WilderResolver';

const start = async (): Promise<void> => {
  await dataSource.initialize();

  const typeGraphQLgeneratedSchema = await buildSchema({
    resolvers: [UserResolver],
    authChecker: ({ context }) => {
      console.log('context from authchecker', context);
      if (context.email !== undefined) {
        return true;
      } else {
        return false;
      }
    },
  });

  const server = new ApolloServer({
    schema: typeGraphQLgeneratedSchema,
    context: ({ req }) => {
      console.log('req', req.headers.authorization);
      if (
        req.headers.authorization !== undefined &&
        req.headers.authorization !== ''
      ) {
        const payload = jwt.verify(
          req.headers.authorization.split('Bearer ')[1],
          'supersecretkey'
        );
        return payload;
      }
      return {};
    },
  });

  const { url } = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
  console.log('hello hot reload ?');
};

void start();

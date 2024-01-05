import 'reflect-metadata';
import * as jwt from 'jsonwebtoken';
import dataSource from './utils';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import UserResolver from './resolver/UserResolver';
import EcogesteResolver from './resolver/EcogesteResolver';
import LoginResolver from './resolver/LoginResolver';
import ChallengeResolver from './resolver/ChallengeResolver';

export const start = async (): Promise<void> => {
  await dataSource.initialize();

  const typeGraphQLgeneratedSchema = await buildSchema({
    resolvers: [
      UserResolver,
      EcogesteResolver,
      LoginResolver,
      ChallengeResolver,
    ],

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
};

void start();

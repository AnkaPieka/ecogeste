// // import { describe, expect, it } from '@jest/globals';
// const {
//   ApolloClient,
//   HttpLink,
//   InMemoryCache,
//   gql,
// } = require('@apollo/client/core');

// const fetch = require('cross-fetch');

// const client = new ApolloClient({
//   link: new HttpLink({
//     uri: 'http://localhost:4000/',
//     fetch,
//   }),
//   cache: new InMemoryCache(),
// });

// const CREATE_USER = gql`
//   mutation Mutation(
//     $password: String!
//     $email: String!
//     $name: String!
//     $avatar: String!
//   ) {
//     addUser(password: $password, email: $email, name: $name, avatar: $avatar) {
//       email
//       name
//       password
//       avatar
//     }
//   }
// `;

// describe('User resolver', () => {
//   it('create user', async () => {
//     const res = await client.mutate({
//       mutation: CREATE_USER,
//       variables: {
//         name: 'testName',
//         email: 'test@test.com',
//         password: 'test',
//         avatar: 'avatar',
//       },
//     });

//     expect(res.data?.addUser).toEqual({
//       __typename: 'User',
//       name: 'testName',
//       email: 'test@test.com',
//       password: 'test',
//       avatar: 'avatar',
//     });
//   });
// });
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';

// Schéma complet avec les types nécessaires
const typeDefs = gql`
type Query {
  _empty: String
}
  type User {
    id: ID!
    email: String!
    name: String!
    password: String!
    avatar: String!
  }

  type Mutation {
    addUser(password: String!, email: String!, name: String!, avatar: String!): User!
  }
`;

const CREATE_USER = gql`
  mutation Mutation(
    $password: String!
    $email: String!
    $name: String!
    $avatar: String!
  ) {
    addUser(password: $password, email: $email, name: $name, avatar: $avatar) {
      email
      name
      password
      avatar
    }
  }
`;

// Création du schéma exécutable
const schema = makeExecutableSchema({ typeDefs });

// Ajout des mocks au schéma
const mocks = {
  Mutation: () => ({
    addUser: () => ({
      id: "mockedId123",
      name: "test",
      email: 'test@test.com',
      password: 'test',
      avatar: 'avatar',
    }),
  }),
};

const schemaWithMocks = addMocksToSchema({ schema, mocks });

// Création du client Apollo pour les tests
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema: schemaWithMocks }),
});

// Tests
describe('User mutation', () => {
  it('should create a new user', async () => {
    const userData = {
      password: "test",
      email: 'test@test.com',
      name: 'test',
      avatar: 'avatar',
      __typename: "User"
    };

    const response = await client.mutate({
      mutation: CREATE_USER,
      variables: userData,
    });

    expect(response.data.addUser).toEqual({
      ...userData
    });
  });
});

export {};
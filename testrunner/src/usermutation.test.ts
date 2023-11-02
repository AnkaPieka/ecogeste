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
import { ApolloClient, InMemoryCache, gql} from '@apollo/client';
import { SchemaLink } from '@apollo/client/link/schema';
import { makeExecutableSchema} from '@graphql-tools/schema';
import { addMocksToSchema } from '@graphql-tools/mock';
// import { addMockFunctionsToSchema} from 'graphql-tools';
// Importez votre schéma GraphQL principal
import { User } from '../../back/src/entity/User'; 
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

const schemaString = CREATE_USER;
const schema = makeExecutableSchema({ typeDefs: schemaString })
const schemaWithMocks = addMocksToSchema({ schema })
// Appliquez des fonctions mockées au schéma cloné avec AddMockFunctionsToSchema
addMocksToSchema({
  schema: schemaWithMocks,
  mocks: {
    Mutation: () => ({
      addUser: () => ({
        // Supposons que l'objet renvoyé contient un id, un name, et peut-être d'autres champs
        id: "mockedId123",
        name: "test",
        email: 'test@test.com',
        password: 'test',
        avatar: 'avatar',
        // Ajoutez d'autres champs mockés au besoin
      }),
    }),
  },
});

// Créer un nouveau client ApolloClient uniquement pour les tests et donnez lui le schema cloné 
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new SchemaLink({ schema: schemaWithMocks }),
});
describe('Category mutation', () => {
  it('should create a new category', async () => {
    const categoryName = "Test Category";

    const response = await client.mutate({
      mutation: schemaString,
      variables: { name: categoryName },
    });

    expect(response.data.createCategory).toEqual({
      id: "mockedId123",
      name: categoryName,
    });
  });
});
export {};

// import { describe, expect, it } from '@jest/globals';
const {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
} = require('@apollo/client/core');

const fetch = require('cross-fetch');

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/',
    fetch,
  }),
  cache: new InMemoryCache(),
});

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

describe('User resolver', () => {
  it('create user', async () => {
    const res = await client.mutate({
      mutation: CREATE_USER,
      variables: {
        name: 'testName',
        email: 'test@test.com',
        password: 'test',
        avatar: 'avatar',
      },
    });

    expect(res.data?.addUser).toEqual({
      __typename: 'User',
      name: 'testName',
      email: 'test@test.com',
      password: 'test',
      avatar: 'avatar',
    });
  });
});

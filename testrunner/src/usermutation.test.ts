// import { describe, expect, it } from '@jest/globals';
const {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  gql,
} = require('@apollo/client/core');

const fetch = require("cross-fetch");
// import fetch from "cross-fetch";

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://backend:4000/',
    fetch,
  }),
  cache: new InMemoryCache(),
});


const CREATE_USER = gql`
  mutation Mutation($password: String!, $email: String!, $name: String!) {
    addUser(password: $password, email: $email, name: $name) {
      email,
      name,
      password
    }
  }
`;

describe('User resolver', () => {
  it('create user', async () => {
    const res = await client.mutate({
      mutation: CREATE_USER,
      variables: { name: 'testName', email: 'test@test.com', password: 'test' },
    });

    expect(res.data?.addUser.name).toEqual(
      'testName',
    );
  });
});

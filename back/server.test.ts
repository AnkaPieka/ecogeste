import { ApolloServer } from 'apollo-server';
import { start } from './src/index';

jest.mock('apollo-server', () => ({
  ApolloServer: jest.fn(() => ({
    listen: jest.fn(() => ({ url: 'http://localhost:4000' })),
  })),
}));

describe('start function', () => {
  it('should initialize server and listen', async () => {
    await start();

    expect(ApolloServer).toHaveBeenCalled();
  });
});

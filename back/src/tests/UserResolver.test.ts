import UserResolver from '../resolver/UserResolver';

const resolver = new UserResolver();

const { addUser } = resolver;

const mockDb = {
  getRepository: jest.fn(),
};

mockDb.getRepository.mockReturnValue({
  save: jest.fn(),
});

mockDb.getRepository().save.mockImplementation(async (user: any) => {
  return {
    id: 1,
    name: user.name,
    password: user.password,
    email: user.email,
    avatar: user.avatar,
  };
});

const mockContext = {
  dataSource: mockDb,
};

describe('UserResolver', () => {
  describe('Mutation', () => {
    describe('addUser', () => {
      it('should create a user', async () => {
        const user = await addUser(
          'test',
          'test@test.com',
          'test',
          'avatar',
          mockContext
        );

        expect(mockDb.getRepository().save).toHaveBeenCalledWith(
          expect.any(Object)
        );
        expect(user).toEqual({
          id: 1,
          name: 'test',
          password: 'test',
          avatar: 'avatar',
          email: 'test@test.com',
        });
      });
    });
  });
});

export default {
  clearMocks: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",
  preset: 'ts-jest',
  testMatch: [
    '/tests//.ts?(x)',
    '**/?(.)+(spec|test).ts?(x)',
    '<rootDir>/src/**/*.test.ts',
  ],
  transform: {
    // eslint-disable-next-line no-useless-escape
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      useESM: true, // Activer la prise en charge d'ESM
    },
  },
};

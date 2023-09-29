// export default {
//     clearMocks: true,
//     coverageDirectory: "coverage",
//     testEnvironment: "node",
//     preset: 'ts-jest',
//     testMatch: [
//         '/tests//.ts?(x)',
//         '**/?(.)+(spec|test).ts?(x)',
//         '<rootDir>/src/**/*.test.ts',
//       ],
//     transform: {
//       // eslint-disable-next-line no-useless-escape
//       "^.+\.(ts|tsx)$": "ts-jest",
//     },
//   };

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    globals: {
      // Définissez ici les variables d'environnement pour la connexion à la base de données
      DB_HOST: 'db', // L'hôte de votre base de données
      // ... d'autres variables si nécessaires
    },
  };
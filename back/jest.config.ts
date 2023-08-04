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
  

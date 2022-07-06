/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  transform: { '.+\\.ts$': 'ts-jest' },
  testEnvironment: 'node',
  preset: '@shelf/jest-dynamodb',
  setupFiles: ['<rootDir>/src/config/setupTests.ts'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts']

}
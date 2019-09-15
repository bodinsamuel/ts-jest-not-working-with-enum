/* eslint-disable @typescript-eslint/no-var-requires */
// const { pathsToModuleNameMapper } = require('ts-jest/utils');
// const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  roots: ['src'],
};

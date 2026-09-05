/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'node',
  verbose: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  collectCoverageFrom: [
    'server.js',
    'healthcare-website/backend/**/*.js',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/coverage/**'
  ],
  testMatch: [
    '**/tests/**/*.js',
    '**/?(*.)+(spec|test).js'
  ]
};

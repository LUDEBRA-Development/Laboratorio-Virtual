module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.(css|less)$': '<rootDir>/styleMock.js'
    },
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
    coverageDirectory: './coverage/',
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.d.ts']
  };
  
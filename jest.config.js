module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: './tsconfig.json'
    }
  },
  transform: {
    '.(ts|tsx)': '<rootDir>/node_modules/ts-jest/preprocessor.js'
  },
  testEnvironment: 'node',
  testRegex: '^.+\\.spec\\.(js|ts)$',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  collectCoverage: true
}

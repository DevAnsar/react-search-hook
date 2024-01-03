module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['@testing-library/react/dont-cleanup-after-each'],
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  verbose: true,
  collectCoverage: true,
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    'react-dom/test-utils': 'react-dom/test-utils',
  },
}

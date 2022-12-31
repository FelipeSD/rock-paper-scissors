module.exports = {
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  setupFilesAfterEnv: [
    "<rootDir>/src/tests/setupTests.ts"
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: 'jsdom',
  globals: {
    "IS_REACT_ACT_ENVIRONMENT": true
  },
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy"
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "<rootDir>/**/*.ts",
    "<rootDir>/**/*.tsx",
    "!**/*.test.ts",
    "!**/*.test.tsx",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  coverageReporters: ["json", "lcov"]
}

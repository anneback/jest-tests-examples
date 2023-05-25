module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.mocks.tsx"],
  testEnvironment: "node",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@test/(.*)$": "<rootDir>/test/$1",
  },
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  modulePathIgnorePatterns: ["<rootDir>/cypress/"],
};

export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  module: "es2020",
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
  },
  rootDir: ".",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};

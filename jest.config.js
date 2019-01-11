module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [ "<rootDir>/src/**/*.test.ts?(x)"],
  setupTestFrameworkScriptFile: "<rootDir>/__test-suport__/jestGlobalSetup.js",
  moduleNameMapper: {
    ".*\\.(css|less|styl|scss|sass)$": "<rootDir>/__test-suport__/styleStub.js",
    ".*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__test-suport__/imageStub.js",
  }
};

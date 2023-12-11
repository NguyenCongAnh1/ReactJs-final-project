/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  clearMocks: true,
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
    '\\.scss$': './sass-transformer.js',
  },
  collectCoverage: true,
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "identity-obj-proxy",
    '\\.scss$': 'identity-obj-proxy',
    '\\.css$': 'identity-obj-proxy',
  },
  coverageDirectory: "coverage",
  testEnvironment: "jsdom"
};

export default config;

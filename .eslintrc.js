module.exports = {
  extends: [
    '@ewerk/eslint-config',
    '@ewerk/eslint-config/typescript',
  ],
  env: {
    jasmine: true, // 'describe' is not defined
    jest: true, // 'jest' is not defined
  },
};

module.exports = {
  '*.{ts,js}': (filesArray) => {
    const files = filesArray.join(' ');
    return [`npx eslint --fix ${files}`];
  },
};

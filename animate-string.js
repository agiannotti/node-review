const chalk = require('chalk-animation');

const animateString = (string) => {
  const animation = chalk.rainbow(string);
  setTimeout(() => animation.stop, 1300);
};

module.exports = { animateString };

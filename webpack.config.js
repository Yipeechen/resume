const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js'
  }
};
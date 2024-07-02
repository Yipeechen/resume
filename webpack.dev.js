const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'src'),
    },
    port: 8080,
    host: 'dev.pee.com',
    https: true,
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

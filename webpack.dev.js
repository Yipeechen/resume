const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const OUTPUT = './docs';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, OUTPUT),
    filename: 'scripts/[hash:8].js',
    publicPath: '/',
  },
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

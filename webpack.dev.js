const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: ['./src'],
    port: 8080,
    host: 'dev.pee.com',
    https: true,
    disableHostCheck: true,
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

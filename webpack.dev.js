const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: ['./src/public'],
    port: 8080,
    host: '0.0.0.0',
    disableHostCheck: true,
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

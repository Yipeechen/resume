const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        path.resolve(__dirname, 'docs/scripts'),
        `!${path.resolve(__dirname, 'docs/images')}`,
        `!${path.resolve(__dirname, 'docs/css')}`,
      ],
    }),
  ],
});

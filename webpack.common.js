const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const { version: APP_VERSION } = require('./package.json');

const SRC_ROOT = './src';

module.exports = {
  context: path.resolve(__dirname, SRC_ROOT),
  entry: {
    app: './index.tsx',
  },
  resolve: {
    alias: {
      '@src': path.resolve('./src'),
    },
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              [
                '@babel/preset-react',
                {
                  'runtime': 'automatic',
                },
              ],
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-export-default-from',
              '@babel/plugin-proposal-export-namespace-from',
              '@babel/plugin-proposal-json-strings',
              '@babel/plugin-proposal-optional-chaining',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: `./.env.${process.env.ENV_MODE}`,
      safe: true,
      systemvars: true,
      silent: true,
      defaults: false,
    }),
    new HtmlWebpackPlugin({
      title: 'About Yiping',
      template: path.resolve(__dirname, SRC_ROOT, 'index.html'),
      pkgVer: JSON.stringify(APP_VERSION),
    }),
  ],
};

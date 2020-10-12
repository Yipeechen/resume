const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 使用 extract text webpack plugin

const extractPlugin = new ExtractTextPlugin({
  filename: 'css/bundle.css', // scss轉 css後另存的目標檔名
});

module.exports = {
  watch: true,
  watchOptions: {
    aggregateTimeout: 5000,
  },
  entry: ['babel-polyfill', './js/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    extractPlugin,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // 針對所有.css 的檔案作預處理
        use: ['style-loader', 'css-loader'], // 順序有差異，css先 style後執行
      },
      {
        test: /\.jpg$/,
        use: {
          loader: 'file-loader',
        },
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },
};

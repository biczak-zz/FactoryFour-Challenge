/* IMPORTS */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/* BASE WEBPACK CONFIGURATION */
module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    app: './src/index.jsx',
  },

  output: {
    filename: 'bundle.[hash].[name].js',
    path: resolve('build'),
  },

  devtool: 'eval-source-map',

  devServer: {
    contentBase: './build',
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      title: 'API Status | FactoryFour',
    }),
  ],

  resolve: {
    alias: {
      Components: resolve('src/components/'),
      Containers: resolve('src/containers/'),
      Util: resolve('src/util/'),
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.js', '.jsx'],
  },
};

const path = require('path');

const config = {
  target: 'node',

  entry: path.resolve(__dirname, '../src/index.js'),

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js',
    library: 'nodejs-redirect',
    libraryTarget: 'umd',
  },

  externals: {
    express: 'express',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;

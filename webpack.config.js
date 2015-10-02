var path = require('path'),
  fs = require('fs'),
  webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: './apps/foo/bar',

  output: {
    path: 'build',
    filename: 'bundle.js'
  },

  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['node_modules']
  },

  devtool: 'source-map'
};

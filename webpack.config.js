/*eslint-env node */
'use strict';
const path = require('path');
const webpack = require('webpack');
const PATHS = {
  app: path.join(__dirname, './public/_js/')
};

module.exports = {
  entry: {
    app: './public/_js/index.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname,
    filename: './public/js/[name].js'
  },
  externals: {
    "jquery": "$"
  }
};

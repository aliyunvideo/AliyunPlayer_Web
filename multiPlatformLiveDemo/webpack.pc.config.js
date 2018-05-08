const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.base.config.js')


module.exports = Merge.smart(baseWebpackConfig, {
  entry: [
    path.resolve(__dirname, 'src/pc/main.js')
  ],
  output: {
    filename: './pc/bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pc/index.html',
      inject: 'body',
      hash: true,
      excludeChunks: ["mobile", "index"]
    })
  ]
});

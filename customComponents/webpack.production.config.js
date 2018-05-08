const webpack = require('webpack');
const path = require('path');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const Merge = require('webpack-merge')

const baseWebpackConfig = require('./webpack.config.js')


module.exports = Merge.smart(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname + '/disk/components'),
    publicPath: '',
    filename: './[name].min.js'
  },
  plugins: [
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]
});

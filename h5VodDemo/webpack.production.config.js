const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    "h5demo": [path.resolve(__dirname, 'src/index.js')]
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname + '/disk'),
    publicPath: '',
    filename: './js/[name].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      include: path.resolve(__dirname, 'src'),
      use: ['style-loader','css-loader', {
        loader: 'postcss-loader',
        options: {
          plugins: () => autoprefixer({
            browsers: ['last 5 versions', '> 1%']
          })
        }
      }]
    }, {
      test: /\.scss$/,
      include: path.resolve(__dirname, 'src'),
      use: ['style-loader','css-loader', {
        loader: 'postcss-loader',
        options: {
          plugins: () => autoprefixer({
            browsers: ['last 5 versions', '> 1%']
          })
        }
      }]
    }, {
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      use: [{
        loader:'babel-loader', 
        options: {
          presets: ['@babel/preset-env']
        }
      }]
    }, {
      test: /\.html$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
            loader: 'html-loader',
            options: {
              interpolate: true
            }
      }]
    }, {
      test: /\.(png|jpg)$/,
      use:[
      {
        loader:'url-loader',
        options:{
          limit:8192,
          name:'images/[hash:8].[name].[ext]'
        }
      }]
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [Autoprefixer({
            browsers: ['last 5 versions']
          })];
        }
      }
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true
        }
      }
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.ejs',
        inject: 'body',
        hash: true,
        title: "H5 Aliplayer Demo"
    }),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/lib',
      to: __dirname + '/disk/lib'
    }]),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/images',
      to: __dirname + '/disk/images'
    }])
  ]
};

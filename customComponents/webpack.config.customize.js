const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const pkg = require('./package.json')
console.log('========= process.env.NODE_ENV', process.env.NODE_ENV)
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
  mode: process.env.NODE_ENV,
  devtool: isDev ? 'inline-source-map' : false,
  devServer: isDev ? {
    static: {
      directory: path.join(__dirname, 'demo'),
    },
    compress: true,
    port: 9000,
  } : false,
  output: {
    path: path.resolve(__dirname, './dist/aliplayer-components'),
    publicPath: '',
    filename: './aliplayercomponents-' + pkg.version + (isDev ? '.js' : '.min.js')
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      'utils': path.resolve(__dirname, './src/utils')
    }
  },
  module: {
    rules: [
      {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env',{targets: "defaults"}], 
          ]
        }
      } 
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 10240,
          esModule: false,
          name: 'images/[name].[hash:7].[ext]'
        }
      },
      type: 'javascript/auto'
    }, {
      test: /\.(woff2?|eot|ttf|otf|)(\?.*)?$/, 
      use: {
        loader: 'url-loader',
        options: {
          limit: 8192,
          esModule: false,
          name: 'fonts/[name].[hash:7].[ext]'
        }
      },
      type: 'javascript/auto'
    }, {
      test: /\.html$/,
      include: path.resolve(__dirname, 'src/components'),
      use: [{
        loader: 'html-loader'
      }]
    }, {
      test: /\.s?css$/,
      use: [{
        loader: "style-loader" 
      }, {
        loader: "css-loader"
      }, {
        loader: "sass-loader"
      }]
    }, {
      test: /comment-core-library\/build\/CommentCoreLibrary\.js/,
      type: 'asset/source'
    }]
  }
}
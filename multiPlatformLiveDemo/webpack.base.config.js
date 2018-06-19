const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:9080'
  ],
  devtool: 'cheap-source-map',
  output: {
    path: __dirname + '/disk',
    publicPath: ''
  },
  module: {
    rules: [{
      test: /\.css$/,
      include: path.resolve(__dirname, 'src'),
      use: ['style-loader','css-loader','postcss-loader']
    }, {
      test: /\.scss$/,
      include: path.resolve(__dirname, 'src'),
      use: ['style-loader','css-loader','postcss-loader','sass-loader']
    }, {
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      use: [{
        loader:'babel-loader', 
        options: { presets: ["es2015","stage-0","react"] }
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
  resolve: {
    extensions: ['.js', '.jsx', 'scss'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [Autoprefixer({
            browsers: ['last 5 versions']
          })];
        },
        devServer: {
          historyApiFallback: true,
          hot: true,
          inline: true,
          progress: true,
          contentBase: './src',
          port: 8081,
          index: __dirname + '/disk',
          host: '0.0.0.0'
        }
      }
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8081?env=dev'
    }),
    new webpack.ProvidePlugin({
      "$": "zepto",
      "Aliplayer": "Aliplayer"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackExternalsPlugin([{
      name: 'zepto',
      var: 'Zepto',
      url: 'https://common.qupai.me/player/lib/zepto.min.js'
    }, {
      name: 'Aliplayer',
      var: 'Aliplayer',
      url: 'https://g.alicdn.com/de/prismplayer/2.7.0/aliplayer-min.js'
    }], {
      // Resolve local modules relative to this directory
      basedir: __dirname
    })
  ]
};

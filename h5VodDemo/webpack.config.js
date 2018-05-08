const webpack = require('webpack');
const path = require('path');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    "h5demo": [path.resolve(__dirname, 'src/index.js')]
  },
  output: {
    path: path.resolve(__dirname + '/disk'),
    publicPath: '',
    filename: './js/[name].js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      include: path.resolve(__dirname, 'src'),
      use: ['style-loader','css-loader','postcss-loader']
    }, {
      test: /\.scss$/,
      include: path.resolve(__dirname, 'src'),
      use: ['style-loader','css-loader','postcss-loader']
    }, {
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      use: [{
        loader:'babel-loader', 
        options: { presets: ["es2015","stage-0"] }
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
    }),
    new OpenBrowserPlugin({
      url: 'http://localhost:8081'
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        inject: 'body',
        hash: true
    }),
    new HtmlWebpackExternalsPlugin([{
      name: 'zepto',
      var: 'zepto',
      url: 'lib/zepto.min.js'
    },{
      name: 'prismplayer',
      var: 'prismplayer',
      url: 'https://g.alicdn.com/de/prismplayer/2.5.1/aliplayer-min.js'
    },{
      name: 'mqttws31',
      var: 'mqttws31',
      url: 'lib/mqttws31.js'
    },{
      name: 'jweixin',
      var: 'jweixin',
      url: 'http://res.wx.qq.com/open/js/jweixin-1.0.0.js'
    },{
      name: 'frozen',
      var: 'frozen',
      url: 'lib/frozen.min.js'
    }], {
      // Resolve local modules relative to this directory
      basedir: __dirname
    }),
    new CopyWebpackPlugin([{
      from: __dirname + '/src/index.html',
      to: __dirname + '/disk/'
    }]),
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

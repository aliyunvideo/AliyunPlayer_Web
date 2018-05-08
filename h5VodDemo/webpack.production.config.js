const webpack = require('webpack');
const path = require('path');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "h5demo": [path.resolve(__dirname, 'src/index.js')],
  },
  output: {
    path: path.resolve(__dirname + '/disk'),
    publicPath: '',
    filename: './js/[name].min.js'
  },
   module: {
    rules: [{
      test: /\.css$/,
      include: path.resolve(__dirname, 'src'),
      use:ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{loader: 'css-loader',
                options: {
                  minimize: true
                }},'postcss-loader']
        })
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
    new webpack.optimize.CommonsChunkPlugin('h5livedemo.common'),
    new ExtractTextPlugin("css/[name].css"),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [Autoprefixer({
            browsers: ['last 5 versions']
          })];
        }
      }
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        inject: 'body',
        hash: true,
        minify: { //压缩HTML文件
          removeComments: true, //移除HTML中的注释
          collapseWhitespace: true //删除空白符与换行符
        }
    }),
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
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

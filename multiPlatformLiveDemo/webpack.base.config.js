const webpack = require('webpack');
const path = require('path');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
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
  devServer: {
    open: true,
    useLocalIp: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './src',
    port: 8081,
    index: __dirname + '/disk',
    host: '0.0.0.0'
  },
  resolve: {
    extensions: ['.js', '.jsx', 'scss'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function () {
          return [autoprefixer({
            browsers: ['last 5 versions']
          })];
        }
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

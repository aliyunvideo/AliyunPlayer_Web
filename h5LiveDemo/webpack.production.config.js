const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    "h5livedemo": [path.resolve(__dirname, 'src/index.js')],
  },
  mode: "production",
  output: {
    path: path.resolve(__dirname + '/disk'),
    publicPath: '',
    filename: './js/[name].min.js'
  },
  module: {
    rules: [{
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true            
          }
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: () => autoprefixer({
              browsers: ['last 3 versions', '> 1%']
            })
          }
        }],
        fallback: 'style-loader'
      })
    }, {
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      use: [{
        loader:'babel-loader', 
        options: { presets: ['@babel/preset-env'] }
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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: `h5livedemo.common`,
          priority: -10,
          chunks: 'all'
        }
      }
    }
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
    new ExtractTextPlugin({
      filename: 'css/[name].css'   // 将 css 提取出来
    }),
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.ejs',
        inject: 'body',
        hash: true,
        minify: { //压缩HTML文件
          removeComments: true, //移除HTML中的注释
          collapseWhitespace: true //删除空白符与换行符
        }
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          drop_console: true
        }
      }
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

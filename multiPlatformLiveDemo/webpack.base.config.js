const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:9080'
  ],
  mode: 'development',
  devtool: 'cheap-source-map',
  output: {
    path: path.resolve(__dirname + '/disk'),
    publicPath: '/disk/'
  },
  externals: {
    zepto: '$'
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
      use: ['style-loader','css-loader', 'sass-loader', {
        loader: 'postcss-loader',
        options: {
          plugins: () => autoprefixer({
            browsers: ['last 5 versions', '> 1%']
          })
        }
      }]
    }, {
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      use: [{
        loader:'babel-loader', 
        options: { presets: ['@babel/preset-env'] }
      }]
    }, {
      test: /\.jsx$/,
      include: path.resolve(__dirname, 'src'),
      exclude: /node_modules/,
      use: [{
        loader:'babel-loader', 
        options: { presets: ['@babel/preset-env', '@babel/preset-react', {
          plugins: [
            '@babel/plugin-proposal-class-properties'
          ]
        }]}
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
    historyApiFallback: {
      index: '/disk/index.html'
    },
    hot: true,
    inline: true,
    progress: true,
    contentBase: './',
    port: 8081,
    index: __dirname + '/disk',
    host: '0.0.0.0',
    publicPath: '/disk/'
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

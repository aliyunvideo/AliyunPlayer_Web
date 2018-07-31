const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        playerdemo: [path.resolve(__dirname, './src/index.js'), path.resolve(__dirname, './src/css/index.css')]
    },
    output: {
        path: path.resolve(__dirname + '/disk'),
        publicPath: '',
        filename: './js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'src': path.resolve(__dirname, './src'),
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: 'babel-loader'
        }, {
            test: /\.vue$/,
            use: {
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: ['css-loader', 'sass-loader'],
                            fallback: 'style-loader'
                        }),
                        scss: ExtractTextPlugin.extract({
                            use: ['css-loader', 'sass-loader'],
                            fallback: 'style-loader'
                        })
                    }
                }
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'images/[name].[hash:7].[ext]'
                }
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf|)(\?.*)?$/, 
            use: {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
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
            test: /\.s?css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader'],
                fallback: 'style-loader'
            })
        }]
    },
    devServer: {
        port: 3000,
        historyApiFallback:{
            index: '/disk/index.html',
        },
        before(app) {
            app.post('/js/data.json', function(req, res) {
                res.json
            })
        },
        contentBase: './',
        publicPath: '/disk/',
        hot: true,
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/style.css'   // 将 css 提取出来
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: 'body',
            hash: true
        }),
        new VueLoaderPlugin()
    ]
}

if (process.env.NODE_ENV === 'development') {
    module.exports.output.publicPath = '/disk/';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.HotModuleReplacementPlugin(),
        
    ])
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new UglifyJSPlugin()
    ])
}

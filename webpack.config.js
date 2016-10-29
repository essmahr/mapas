var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var autoprefixer = require('autoprefixer');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var config = require('./public/app/config/env.js');

var isProduction = process.env.NODE_ENV === 'production';

var common = {
  entry: [
    path.resolve(__dirname, './public/app/index.js')
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'public/app'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      isProduction: isProduction,
      analyticsKey: config.ANALYTICS_KEY,
      template: 'index.ejs',
      inject: 'body',
      hash: true,
    }),
    new webpack.ProvidePlugin({
      Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
  ],
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]

}

var dev = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    devtool: 'source-map',
    contentBase: './public',
    port: 8080
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
          'postcss-loader',
          'sass?sourceMap'
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ]
}

var production = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader!sass?sourceMap'),
      },
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('app.css', {
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}

module.exports = merge(
  common,
  isProduction ? production : dev
);

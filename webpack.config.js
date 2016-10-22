var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var isProduction = process.env.NODE_ENV === 'production';

console.log(process.env.NODE_ENV);

var cssHash = isProduction
  ? '[hash:base64:5]'
  : '[name]_[local]_[hash:base64:5]';

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
        test: /\.scss$/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=' + cssHash,
          'sass?sourceMap'
        ]
      },
      { test: /\.js$/,
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
      template: 'index.ejs',
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      Promise: 'imports?this=>global!exports?global.Promise!es6-promise',
      fetch: 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
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
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ]
}

var production = {
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
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

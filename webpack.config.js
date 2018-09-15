require("dotenv").load();
const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV === "production";

const common = {
  entry: [path.resolve(__dirname, "./public/app/index.js")],
  output: {
    path: __dirname + "/build",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "public/app"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      isProduction: isProduction,
      analyticsKey: process.env.ANALYTICS_KEY,
      template: "index.ejs",
      inject: "body",
      hash: true
    }),
    new webpack.DefinePlugin({
      "process.env": {
        MAPS_API_KEY: JSON.stringify(process.env.MAPS_API_KEY)
      }
    }),
    new webpack.ProvidePlugin({
      Promise:
        "imports-loader?this=>global!exports-loader?global.Promise!es6-promise",
      fetch:
        "imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch"
    })
  ]
};

const dev = {
  mode: "development",
  devServer: {
    compress: true,
    port: 8000,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  devtool: "cheap-eval-source-map",
  entry: [
    "webpack/hot/dev-server",
    "webpack-dev-server/client?http://localhost:8080"
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          "style-loader?sourceMap",
          "css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]",
          "postcss-loader",
          "sass-loader?sourceMap"
        ]
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ]
};

const production = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader!sass-loader?sourceMap"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};

module.exports = merge(common, isProduction ? production : dev);

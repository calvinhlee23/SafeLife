// @ Calvin Lee

var path = require("path");
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
  context: __dirname,
  entry: [
    'whatwg-fetch',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './client/index.dev.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/',
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", ".jsx" ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({debug: true}),
    new CleanWebpackPlugin(['dist'], { root: __dirname }),
    new ExtractTextPlugin('[name].min.css'),
    new CopyWebpackPlugin([{ from: 'client/assets' }]),
    new HtmlWebpackPlugin({
      template: 'client/index.html',
      filename: 'index.html',
      inject: 'body' }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// FOR PRODUCTION
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');


// FOR DEVELOPMENT
// module.exports = {


// FOR PRODUCTION

var config = {
  entry: ['babel-polyfill', './app/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ],
  mode: "development"
};

// FOR PRODUCTION
if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new UglifyJsPlugin()
  );
}

module.exports = config;
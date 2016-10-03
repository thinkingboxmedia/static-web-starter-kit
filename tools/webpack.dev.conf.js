
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const AUTOPREFIXER_BROWSERS = {
  browsers: [
    '>1%',
    'last 4 versions',
    'Firefox ESR',
    'not ie < 9', // React doesn't support IE8 anyway
  ],
}

// add hot-reload related code to entry chunks
Object.keys(baseConfig.entry).forEach(name => {
  baseConfig.entry[name] = ['./tools/dev-client'].concat(baseConfig.entry[name]);
});

module.exports = merge(baseConfig, {
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  output: {
    // necessary for the html plugin to work properly
    // when serving the html from in-memory
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[local]_[hash:base64:3]',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.template.html',
      inject: true,
      GoogleAnalytics: 'UA-XXXXXX',
      ENV: 'dev',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function postcss() {
          return [require('precss')(), require('autoprefixer')(AUTOPREFIXER_BROWSERS)];
        },
      },
    }),
  ],
  /**
  eslint: {
    emitWarning: true,
  },
   **/
})

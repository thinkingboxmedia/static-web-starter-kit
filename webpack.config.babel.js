import path from 'path';
import fs from 'fs';
import autoprefixer from 'autoprefixer';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

const pkg = require('./package.json');

const ENV = process.env.NODE_ENV || 'development';

const CSS_MAPS = ENV!=='production';

module.exports = {

	entry: {
    app: ['./src/polyfills.js', './src/index.js'],
    vendors: ['domready', 'ismobilejs', 'react', 'react-dom', 'react-redux', 'redux', 'react-router-dom', 'react-f1', 'react-router-redux', 'preloader'],
  },

	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: '/',
		filename: ENV==='production' ? '[name].[chunkhash].js' : '[name].js',
		chunkFilename: '[id].[chunkhash].js',
	},

	module: {
		loaders: [
			{
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve('src')
        ],
      },
			{ 
				test: /\.css$/, 
				loader: ENV==='production' ? ExtractTextPlugin.extract({
          fallbackLoader: "style-loader",
          loader: 'css-loader?modules&importLoaders=1&localIdentName=[local]_[hash:base64:3]&minimize!postcss-loader',
      	}) : [
          'style-loader',
          'css-loader?modules&localIdentName=[local]_[hash:base64:3]',
          'postcss-loader',
        ] 
			},
			{
				test: /\.json$/,
				loader: 'json-loader',
				query: {
          name: '[name].[ext]?[hash:4]',
        },
			},
			{
				test: /\.(xml|html|txt|md)$/,
				loader: 'raw-loader',
				query: {
          name: '[name].[ext]?[hash:4]',
        },
			},
			{
				test: /\.jpg$|\.gif$|\.png$|\.woff$|\.woff2$|\.ttf$|\.svg$|\.eot$|\.wav$|\.mp3$|\.bin$/,
				loader: ENV==='production' ? 'file?name=[path][name]_[hash:base64:4].[ext]' : 'url-loader',
				query: {
          name: '[name].[ext]?[hash:4]',
        },
			},
			// GLSL
      { test: /\.(glsl|frag|vert)$/, loader: 'raw-loader' },
      { test: /\.(glsl|frag|vert)$/, loader: 'glslify-loader' }
		]
	},

	plugins: ([

		new webpack.NoEmitOnErrorsPlugin(),

		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(ENV)
		}),

		new HtmlWebpackPlugin({
			hash: true,
      filename: 'index.html',
      template: 'index.template.ejs',
      inject: true,
			googleAnalyticsID: ENV==='production' ? 'UA-XXXXXXXX-X' : 'UA-XXXXXXXX-X',
			FBAppId: ENV==='production' ? '' : '',
			version: pkg.version,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),

		new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function postcss() {
          return [
						autoprefixer({ browsers: [
							'>1%',
							'last 4 versions',
							'Firefox ESR',
							'not ie < 9',
						]}),
						require('postcss-import'),
						require('postcss-custom-media'),
						require('postcss-custom-properties'),
						require('postcss-mixins'),
						require('postcss-for'),
						require('postcss-nested'),
						require('postcss-random'),
					];
        },
      },
    }),

	]).concat(ENV==='production' ? [

		new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors'],
    }),

		// extract css into its own file
    new ExtractTextPlugin('[name].[contenthash].css'),

    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      compress: {
        warnings: false,
        drop_console: true,
        screw_ie8: true
      }
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

		new CompressionPlugin(),

		/**
    new SWPrecache({
			cacheId: 'cache-v1',
			filename: 'service-worker.js',
			dontCacheBustUrlsMatching: /./,
			navigateFallback: 'index.html',
			staticFileGlobsIgnorePatterns: [/\.map$/]
		})
		 */
	] : []).concat(ENV==='development' ? [

		new webpack.HotModuleReplacementPlugin(),

	] : []),

	devtool: ENV==='production' ? 'source-map' : 'cheap-module-eval-source-map',

	devServer: {
		port: process.env.PORT || 8080,
		host: '0.0.0.0',
		publicPath: '/',
		contentBase: ['./src', './static'],
		historyApiFallback: true,
		//https: { 
		//	key: fs.readFileSync('localhost.pem', 'utf8'), 
		//	cert: fs.readFileSync('localhost.pem', 'utf8') 
		//},
		proxy: {
			// OPTIONAL: proxy configuration:
			// '/optional-prefix/**': { // path pattern to rewrite
			//   target: 'http://target-host.com',
			//   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
			// }
		}
	}
};
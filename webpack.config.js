const webpack = require('webpack');
const Path = require('path');
const argv = require('yargs').argv;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;
const resPath = Path.join(__dirname, '/dist');


module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
		path: resPath,
		filename: 'app.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			title: 'Webpack Build'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery'
		}),
		new MiniCssExtractPlugin()
	],
	module: {
		rules: [
			{
				test: /\.html$/,
    			use: 'html-loader'
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ['@babel/preset-env']
					}
				}
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							plugins: [
								isProduction ? require('cssnano') : () => {},
								require('autoprefixer')({
									browsers: ['last 4 versions']
								})
							]
						}
					},
					'sass-loader'
				]
			},{
				test: /\.styl$/,
				use: [
					'style-loader',
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [{
					loader: 'file-loader',
					options: {
						name: 'images/[name][hash].[ext]'
					}
				}, {
					loader: 'image-webpack-loader',
					options: {
						mozjpeg: {
							progressive: true,
							quality: 70
						}
					}
				}, ],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader', 'css-loader'
				]
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[name][hash].[ext]'
					}
				}
			}
		]
	},
	devServer: {
		bonjour: true,
		overlay: true,
		compress: true,
		contentBase: resPath
	}
}
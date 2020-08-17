var path = require('path');
var miniCssExtractPlugin =require('mini-css-extract-plugin');

var config = {
	entry: {
		main: './main'
	},
	output: {
		path: path.join(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'main.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
                use: [
	                {
	                	loader: miniCssExtractPlugin.loader,
	                	options: {
	                		hmr: process.env.NODE_ENV === "development"
	                	}
	                },
	                "css-loader"
                	
                ]
			}
		]
	},
	plugins: [
		new miniCssExtractPlugin({
			filename: 'main.css'
		})
	]

};

module.exports = config;
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'json']
	},

	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.ts[x]?$/,
				loader: 'awesome-typescript-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['@babel/preset-react', '@babel/preset-env']
				}
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Email Editor Widget',
			filename: 'index.html',
			template: 'index.html'
		})
	]
}

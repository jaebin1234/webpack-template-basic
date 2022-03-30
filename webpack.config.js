//import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//export
module.exports = {
	//파일을 읽어들이기 시작하는 진입점 설정
	// 시작점이 어딘데?
	entry: './js/main.js',

	// 반환하는것? 결과값(번들) output
	// 반환값은 여러개 가능
	//결과물(번들)을 반환하는 설정
	output: {
		// path: path.resolve(__dirname, './dist'),
		// filename: 'main.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					'postcss-loader',
					// Compiles Sass to CSS
					'sass-loader',
				],
			},
			{
				test: /\.js$/,
				use: ['babel-loader'],
			},
		],
	},

	//번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
	plugins: [
		// 번들링 된 js 결과물을 index.html에 처리
		new HtmlPlugin({
			template: './index.html',
		}),
		//images 앞에 static 키워드를 생략시킬 수 있다.
		new CopyPlugin({
			patterns: [{ from: 'static' }],
		}),
	],
	devServer: {
		host: 'localhost',
	},
};

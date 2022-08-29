const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const ruleForJavascript = {
	test: /\.js$/,
	loader: "babel-loader",
	options: {
		presets: [
			[
				"@babel/preset-react",
				{
					runtime: "automatic", //Para sacar import React
				},
			],
		],
	},
};

const ruleForStyles = {
	test: /\.css$/,
	use: ["style-loader", "css-loader"],
};

const rules = [ruleForJavascript, ruleForStyles];

module.exports = {
	//entry: './src/index.js', por defecto
	output: {
		path: path.resolve(__dirname, "build"),
	},
	plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })], //npm install html-webpack-plugin
	module: {
		rules,
	},
    devServer: {
        open: true, // Abrir el navegador
        port: 3000,
        overlay: false, //abrir un overlay con false
        
    }
};

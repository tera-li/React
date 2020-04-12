const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPlugin = new HtmlWebpackPlugin({template: "./public/index.html"});

module.exports = {
    // mode: 'development', // production
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "index.js",
    },
    plugins: [
        htmlPlugin,
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {test:/\.css$/,loader:"style-loader!css-loader"},
            {test: /\.svg$/, loader: 'url-loader',}
        ],
    },
};

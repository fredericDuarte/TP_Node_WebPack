var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-sample.bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] }
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
};
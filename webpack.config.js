const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HelloWorldPlugin = require('./src/plugins/HelloWorldPlugin');
const AddReadMePlugin = require('./src/plugins/AddReadMePlugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js',
        loaderApp: './src/loaderApp.js',
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    // mode: "development",
    module: {
        rules: [
            {
                test: /\.xml$/,
                use: ['xml-loader'],
            }
        ]
    },
    resolveLoader: {
      modules: [path.join(__dirname, '/src/loader')]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HelloWorldPlugin({ options: true }),
        new AddReadMePlugin({ options: true }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
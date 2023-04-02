const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    // entry: './build/registration-service.bundle.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'registration-service.bundle.js',
        publicPath: 'http://localhost:3000/'
    },
    mode: 'development',
    devServer: {
        static: './build',
        port: 3000,
        historyApiFallback: true,
        compress: true
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.js$|tsx|ts/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.css$|scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html',
            favicon: './public/favicon.ico'
        })
    ]
}
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        publicPath: path.resolve('public'),
        sourceMapFilename: 'source.map'
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: path.resolve('public'),
        compress: true,
        port: 3000,
        watchContentBase: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader?sourceMap", options: { root: "/style/" } },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader", // compiles Sass to CSS
                    "postcss-loader?sourceMap"
                ]
            }
        ]
    }
}

const path = require('path');
const autoprefixer = require('autoprefixer');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
        publicPath: path.resolve('public')
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: path.resolve('public'),
        compress: true,
        port: 3000,
        watchContentBase: true
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin([
            {
                from: 'src/index.html',
                to: 'index.html'
            },
            {
                from: 'src/assets/',
                to: 'assets/'
            }
        ])
    ],
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
                    { loader: "style-loader" }, // creates style nodes from JS strings
                    { loader: "css-loader" }, // translates CSS into CommonJS
                    { loader: "sass-loader" }, // compiles Sass to CSS
                    { loader: "postcss-loader?sourceMap" }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        attrs: false,
                        interpolate: true
                    }
                }
            }
        ]
    }
}

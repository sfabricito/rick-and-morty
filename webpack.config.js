const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.js', '.svg'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
        ),
        new CopyWebpackPlugin(
            {
                patterns: [
                    {
                        from: './src/styles/styles.css',
                        to: './styles',
                    },
                    {
                        from: './src/styles/tablet.css',
                        to: './styles'
                    },
                    {
                        from: './src/styles/desktop.css',
                        to: './styles'
                    },
                    {
                        from: './src/assets',
                        to: './assets',
                    }

                ]
            }
        )
    ]
}
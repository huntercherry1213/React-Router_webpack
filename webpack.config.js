const Path = require('path');
const Webpack = require('webpack');
const Html = require('html-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    devServer: {
        quiet: false,
        stats: {
            colors: true
        }
    },
    entry: [Path.resolve(__dirname, './src/app/index.jsx')],
    output: {
        path: Path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '']
    },
    plugins: [
        new Webpack.DefinePlugin({
            '__DEV__': true,
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new Html({ // Also generate a test.html
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
};
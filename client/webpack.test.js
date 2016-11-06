'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'

            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            {
                test: /\.css$/,
                exclude: path.resolve('src', 'app'),
                loader: 'null'
            },
            {
                test: /\.css$/,
                include: path.resolve('src', 'app'),
                loader: 'raw'
            },
            {test: /\.scss$/, exclude: /node_modules/, loaders: ['raw-loader', 'sass-loader']},

        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['node_modules'],
        root: path.resolve('.', 'src')
    },
    tslint: {
        emitErrors: true
    }
};



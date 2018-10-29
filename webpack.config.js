"use strict";
 
const path = require('path'); 
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    watch: true,
    output: {
        libraryTarget: 'umd'
    },  
    //Add our config for production mode optimizations optimization.
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                uglifyOptions: {
                    compress: {
                        drop_console: true
                    }
                }
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        cacheDirectory: true
                    }
                },
                {
                    loader: 'ts-loader'
                }]
            }
        ]
    },
    plugins: [

    ],
    resolve: {
        extensions: ['.ts']
    }

};

module.exports = config;


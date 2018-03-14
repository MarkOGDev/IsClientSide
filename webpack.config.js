"use strict";

/**
 * We can use separate config files if you want to define lots of options.
 * you would add mode: develoment || production to the webpack config
 * You set the --config flag in the npm script in package.json
 * otherwise you can set the options in the npm script.
 * 
 * 
 */

//const webpack = require('webpack');
const path = require('path'); 
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


const config = {
    watch: true,
    //example mode for separate config
    //mode: develoment
    output: {
        libraryTarget: 'umd'
    },  
    //in mode: production optimizations happen. here we add extra config for that optimization.
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
                        presets: 'env',
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
        extensions: ['.tsx', '.ts', '.js']
    }

};




module.exports = config;


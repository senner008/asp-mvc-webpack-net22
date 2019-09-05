"use strict";
const path = require('path');
const webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const merge = require('webpack-merge');

const config = {
    "entry": {
      "main": [
        "js/main.ts"
      ]
    },
    "sourcePath":  "/Client",
    "outputPath":  "/wwwroot",
    "publicPath": "/"
}

const srcPath = path.join(__dirname, config.sourcePath),
    distPath = path.join(__dirname, config.outputPath);

const commonConfig = {
    entry: config.entry,
    output: {
        path: distPath,
        filename: 'js/[name].[contenthash].js',
        publicPath: config.publicPath
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.vue'],
        modules: [srcPath, "node_modules"],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'jquery': "jquery/src/jquery"
        }
    },
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }]
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {}
                    }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/'
                }
            }
       ]     
    },
    plugins: [
        new CleanWebpackPlugin(['css', 'js'], {root: distPath}),
        new VueLoaderPlugin(),
        new CaseSensitivePathsPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),

    ]
};

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return merge(commonConfig, require('./' + (isDevBuild ? 'webpack.config.dev.js' : 'webpack.config.prod.js')));
};

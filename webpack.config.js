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
        "main.ts"
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
            'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1 
            'jquery': "jquery/src/jquery"
        }
    },
    watchOptions: {
        ignored: /node_modules/
    },
    module: {
        rules:[
            {
                test: /\.less$/,
                use: [
                  {
                    loader: 'style-loader', // creates style nodes from JS strings
                  },
                  {
                    loader: 'css-loader', // translates CSS into CommonJS
                  },
                  {
                    loader: 'less-loader', // compiles Less to CSS
                  },
                ],
              },
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
        })
    ]
};

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return merge(commonConfig, require('./' + (isDevBuild ? 'webpack.config.dev.js' : 'webpack.config.prod.js')));
};

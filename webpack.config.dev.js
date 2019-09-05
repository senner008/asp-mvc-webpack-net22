"use strict";


module.exports = {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: 'js/[name].js'
    },
    module: {
        // rules: [
        //     {
        //         test: /\.css$/,
        //         use: [
        //             "vue-style-loader",
        //             'style-loader',
        //             "css-loader"
        //         ]
        //     }
        // ]
    },
    plugins: [
        // new MiniCssExtractPlugin({
        //     filename: "css/[name].css"
        // })
    ]
};
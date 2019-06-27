/**
 * Created by Administrator on 2019/6/20/020.
 */
'use strict';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');

const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(baseWebpackConfig, {
    // 模式
    mode: "production",
    // 调试工具
    // devtool: '#source-map',
    devtool:"cheap-module-source-map",   // 线上生成配置
    // 输出
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "js/[name].[chunkhash].js",
    },
    // 插件
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].[contenthash].css'
        }),
    ],
    // 优化
    module: {
        rules: [
            {
                test: /\.s?[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    // 代码分离相关
    optimization: {
        nodeEnv: 'production',
        minimizer: [new UglifyJSPlugin()],
        runtimeChunk: {
            name: 'manifest'
        },
        splitChunks: {
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'initial',
                }
            }
        }
    }
});

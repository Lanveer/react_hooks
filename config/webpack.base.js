/**
 * Created by Administrator on 2019/6/20/020.
 */
'use strict'
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const manifest = require('../dll/vendors.dll')
function getFileRelativePath(dir) {
    return path.join(__dirname, '..', dir);
}
module.exports = {
    // 入口起点
    entry: {
        app: './src/main.js',
    },
    // 输出
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "[name].js",
    },
    // 解析
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', 'jsx'],
        alias: {
            app: getFileRelativePath('src'),
            models: getFileRelativePath('src/models'),
            service:getFileRelativePath('service')
        }
    },
    // loader
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules|bower_components)/,// 屏蔽不需要处理的文件（文件夹）（可选）
                loader: 'babel-loader'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            strictMath: false,
                            noIeCompat: true,
                            javascriptEnabled: true,
                            compact:true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: "pre",
                include: [path.resolve(__dirname, 'src')],
                options: {

                }
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|eot|ttf)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader?name=i/[name].[ext]'
            },
            {
                test: /\.pdf(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?minetype=application/pdf&name=[name].pdf'
            }
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            lan: '../dll/' + manifest+ '' //manifest就是dll生成的json
        }),
        new AddAssetHtmlWebpackPlugin({
            // filepath: path.resolve(__dirname, '../dll/antd.dll.js') // 对应的 dll 文件路径
            filepath: '../dll/*.dll.js',
        })
    ]
};

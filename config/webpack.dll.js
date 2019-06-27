const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const src = path.resolve(process.cwd(), 'src'); // 源码目录
const evn = process.env.NODE_ENV == "production" ? "production" : "development";
module.exports = {
    mode: 'production',
    entry: {
        // 定义程序中打包公共文件的入口文件vendor.js
        vendors: [
            'react',
            'react-dom',
            'react-router',
            'lodash',
            'moment',
            'antd',
        ],
    },

    output: {
        // path: path.resolve(__dirname, '..', 'dll'),
        path: path.join(__dirname, '..','dll'),
        filename: '[name].dll.js',
        library: '[name]_[hash]',
        libraryTarget: 'this'
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            // 定义程序中打包公共文件的入口文件vendor.js
            context: process.cwd(),
            // manifest.json文件的输出位置
            // path: path.resolve(__dirname, '..', 'dll/[name]-manifest.json'),
            path: path.resolve(__dirname, '..', 'build'),

            // 定义打包的公共vendor文件对外暴露的函数名
            name: '[name]_[hash]'
        })
    ]
};

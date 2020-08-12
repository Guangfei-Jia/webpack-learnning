const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除dist目录无用文件,官方文档未及时更新用法
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); 

const webpack = require('webpack');

module.exports = {
    entry: {
        // app:'./src/index.js',
        // print: './src/print.js'
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'source-map',
    // mode:'development',
    mode:'production', //默认production     tree sharking  去掉未使用的模块 并使用UglifyJsPlugin压缩后输出

    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        //携带cleanStaleWebpackAssets参数，watch打包时没有修改的文件不会删除掉，第一次打包多余的文件正常删除
        new CleanWebpackPlugin({cleanStaleWebpackAssets: false}),
        new HtmlWebpackPlugin({
            title: '自动生成index.html文件'
        }),
        
    ],


    // entry: './src/index.js',
    // output: {
    //     filename: 'bundle.js',
    //     path: path.resolve(__dirname, 'dist')
    // },
    // module: {
    //     rules: [
    //         { test: /\.css$/, use: ['style-loader', 'css-loader'] },
    //         { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
    //         { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] },
    //         {
    //             test: /\.(csv|tsv)$/,
    //             use: [
    //                 'csv-loader'
    //             ]
    //         },
    //         {
    //             test: /\.xml$/,
    //             use: [
    //                 'xml-loader'
    //             ]
    //         }
    //     ]
    // }
    
    
};
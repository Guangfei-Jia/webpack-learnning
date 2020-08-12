const webpack = require('webpack');
 const {merge} = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { loader } = require('mini-css-extract-plugin');

 module.exports = merge(common, {
    // devtool: 'source-map', //打包生产.map文件
    mode:'development',
    module:{
        rules: [
            {
              test: /\.css$/,  // 用正则去匹配要用该 loader 转换的 CSS 文件
              use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader',
                'css-loader'
              ]
            },
            {
                test:/.js$/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env']
                    },
                    
                },
                exclude:/node_modules/,
            }
          ]
    },
    //分离公共模块打包
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: 'vendor', //模块名称
                    chunks: 'initial',  //值可以是 all，async和initial
                    minChunks: 2        //拆分前必须共享模块的最小块数。
                },
            }
        }
    },
   plugins: [
     new UglifyJSPlugin({
         sourceMap: true
     }),
     new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
     }),
     new MiniCssExtractPlugin({
        filename: '../dist/css/style.css',  // 从 .js 文件中提取出来的 .css 文件的名称
      }),
   ]
 });
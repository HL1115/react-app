var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var FilemanagerWebpackPlugin = require('filemanager-webpack-plugin');
// yarn add webpack webpack-cli -D
// yarn add webpack-dev-server -D
// yarn add html-webpack-plugin -D
// yarn add style-loader css-loader -D
// yarn add less less-loader -D

// yarn add react react-dom
// yarn add babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env -D
// yarn add @babel/preset-react -D
// 分离CSS成一个css文件
// yarn add mini-css-extract-plugin -D
// 删除之前打包的文件
// yarn add filemanager-webpack-plugin -D
// 处理图片
// yarn add file-loader -D
// yarn add url-loader -D
module.exports = {
    // 多入口
    entry:{
        app:'./src/app.js',
        index: './src/index.js'
    },
    devServer:{
        port: 3000
    },
    // 定位错误的行数
    devtool:'source-map',
    output:{
        filename: 'js/[name].js',
        path: path.resolve(__dirname,'build'),
        // publicPath: '/'

    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'app.html',
            chunks:['app'],
            title:'react-app',
            template:'./public/index.html'
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            chunks:['index'],
            title:'react-app',
            template:'./public/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/[name].css'
        }),
        new FilemanagerWebpackPlugin({
            onStart:{
                delete:['build']
            }
        })
    ],
    module:{
        rules:[
            {
               test:/\.css$/,
               use:[MiniCssExtractPlugin.loader,'css-loader'] 
            },
            {
                test:/\.less$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test:/\.(jpg|png|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:'images/[name].[ext]'
                    }
                }
            }
        ]
    }
}
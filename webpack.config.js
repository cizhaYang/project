const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: "js/app.[hash].js",
        path: path.resolve(__dirname, 'build'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                include: path.resolve(__dirname, 'src/images'),
                loader: 'url-loader',
                options: {
                    limit: 10000, //小于10000B的图片base64的方式引入，大于10000B的图片以路径的方式导入
                    name: 'images/[name].[hash:7].[ext]'
                },
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                loader: path.resolve(__dirname, 'loader', 'replace-loader'),
                options: {
                    words: '编辑'
                }
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            template: 'public/index.html'
        }),
        new CleanWebpackPlugin(), // 清理打包文件
    ],
};
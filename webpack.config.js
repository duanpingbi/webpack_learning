const path = require('path');//node.js中的原生模块
const HtmlWebpackPlugin = require('html-webpack-plugin');//按照模板生成html并且引入相关文件资源
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//将css抽离出来，并且引入在html文件中
module.exports={
    entry: './src',
    output: {
        filename: "js/[name][hash:8].js",
        path: path.resolve(__dirname,'dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "welcome Webpack",
            template: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            { test: /\.css$/, use: [ MiniCssExtractPlugin.loader,'css-loader','postcss-loader'] },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 80,
                            name:'static/images/[name].[ext]',
                            publicPath:'/'
                        }
                    },
                ],
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader', 
                    },
                ],
            },
        ]
    },
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        compress: true,
        host: 'localhost',
        port: 8080,
        open:true
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.css', '.less']
    }
};
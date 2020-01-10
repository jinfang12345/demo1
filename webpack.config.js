const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

module.exports = {
    mode: 'development',
    devtool: "cheap-source-map",
    // by https://blog.csdn.net/moshowgame
    // 当entry是个数组的时候，里面同样包含入口js文件，另外一个参数可以是用来配置webpack提供的一个静态资源服务器，webpack-dev-server。webpack-dev-server会监控项目中每一个文件的变化，实时的进行构建，并且自动刷新页面：
    // 当entry是个对象的时候，我们可以将不同的文件构建成不同的文件，按需使用，比如在我的hello页面中只要\引入hello.js即可：
    entry: {
        index: './src/index.js',
    },
    devServer: {
        contentBase: './dist',
        open: true,
        port: 10086,
        historyApiFallback: true,
    },
    // 打包後生成的檔案路徑，绝对路径
    output: {
        // publicPath: "http://www.cdn.com.cn",
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].[contentHash:8].chunk.js'
    },
    // 自动补全,后缀可以省略不写
    // webpack在构建包的时候会按目录的进行文件的查找，resolve属性中的extensions数组中用于配置程序可以自行补全哪些文件后缀：
    // onfiguration.resolve.extensions[0] should be an non-empty string.A non-empty string .请把[]中得''去掉
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss', '.json'],
        alias: {
            // 配置后可以直接用@来表示这个位置,直接应用目录下得文件,是绝对路径
            '@': path.join(__dirname, './src')
        }
    },
    // 設置 eval 或 SourceMap 屬性，debug 用
    // devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                // 自動編譯 JSX 或 JS 檔 （require 可載入 JSX 了）
                test: /\.(js|jsx)$/,
                use: { loader: 'babel-loader' },
                exclude: /node_modules/
            },
            {
                //自動編譯 sass 檔成 CSS （require 可載入 sass 了），可以傳入 sourceMap 參數以便 debug
                test: /\.scss$/,
                loader: ['style-loader','css-loader','sass-loader']
            }, {
                //自動編譯 less 檔成 CSS （require 可載入 less 了），可以傳入 sourceMap 參數以便 debug
                test: /\.less$/,
                loader: 'style!css?sourceMap!less?sourceMap'
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                        limit: 2048
                    }
                }
            },
            {
                test: cssRegex,
                exclude: cssModuleRegex,
                loader: 'style-loader!css-loader'
                // Don't consider CSS imports dead code even if the
                // containing package claims to have no side effects.
                // Remove this when webpack adds a warning or an error for this.
                // See https://github.com/webpack/webpack/issues/6571
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/newTemplate.html"
        }),
        new CleanWebpackPlugin()
    ],
    optimization: {
      splitChunks: {
          chunks: 'all'
      }
    },
}

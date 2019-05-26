let path = require('path');
let webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/main.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, './build')
    },
    module: {
        rules: [

            { test: /\.ts$/, use: 'ts-loader' }
        ]
    },
    resolve: {
        extensions:[ ".webpack.js", ".web.js", ".ts", ".js" ]
    },
    mode : "development",
    //mode: "development",
    watch : true,
    devServer: {
        hot: true,
        inline: true,
        host: "localhost",
        port: 8082,
        watchOptions: {
            poll: true
        }
    }

};
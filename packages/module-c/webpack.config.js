const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: './build',
        publicPath: "/",
        filename: 'module-c.min.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './src/index.html', to: './index.html' }
        ])
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devtool: "#inline-source-map"
};

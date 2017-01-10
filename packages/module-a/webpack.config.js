module.exports = {
    entry: "./src/index.js",
    output: {
        path: "./build",
        filename: "module-a.min.js",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015",],
                },
            },
        ],
    },
};

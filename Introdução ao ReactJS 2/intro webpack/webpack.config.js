const path = require("path");

module.exports = {
    sourcemap: "true",
    entry : './src/index.js',
    output: {
        path: path.relative(__dirname, 'dist'),
        filename: 'bundler.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new htmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}

module.exports = {
    entry: './app/main.js',
    output: {
        path: __dirname + '/public/js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.js$/,
            loader: "babel-loader"
        }]
    },
    resolveLoader: {
        root: __dirname + '/node_modules'
    }
};
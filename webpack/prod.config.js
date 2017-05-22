const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',

    entry: [],

    output: {
        publicPath: ''
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!sass')
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
            },
            __DEVELOPMENT__: false
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.ProvidePlugin({'React': 'react', 'ReactDOM': 'react-dom', 'MUI': 'material-ui', 'Promise': 'exports?global.Promise!es6-promise', 'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'}),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: false,
            comments: false
        })
    ]
};

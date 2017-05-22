const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:3001/__webpack_hmr', './src/index'
    ],
    output: {
        publicPath: 'http://localhost:3001/dist/'
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!sass'
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                exclude: /node_modules/,

            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            },
            __DEVELOPMENT__: true,
            __API_URL: JSON.stringify("#### URL TO API ####")
        }),
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({'React': 'react', 'ReactDOM': 'react-dom', 'MUI': 'material-ui', 'Promise': 'exports?global.Promise!es6-promise', 'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'})
    ]
};
